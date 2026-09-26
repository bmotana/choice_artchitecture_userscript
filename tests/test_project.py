import json
import re
from pathlib import Path

import tomllib

REPO_ROOT = Path(__file__).resolve().parent.parent


def test_userscript_file_exists_and_has_metadata():
    script_path = REPO_ROOT / "twitter_ container_spacing.js"
    assert script_path.exists(), "Userscript file missing"

    content = script_path.read_text(encoding="utf-8")
    assert "// ==UserScript==" in content
    assert "// ==/UserScript==" in content
    assert re.search(r"@name\s+Add Spacing to Tweet Containers", content)
    assert re.search(r"@match\s+https://\*\.x\.com/\*", content)


def test_essential_repository_files_exist():
    essential_files = [
        "README.md",
        "LICENSE",
        ".gitignore",
        ".editorconfig",
        "package.json",
        "pyproject.toml",
        ".github/workflows/ci.yml",
    ]
    for rel_path in essential_files:
        assert (REPO_ROOT / rel_path).exists(), f"Missing required file: {rel_path}"


def test_package_json_is_valid():
    pkg_path = REPO_ROOT / "package.json"
    with open(pkg_path, encoding="utf-8") as f:
        data = json.load(f)
    assert data["name"] == "choice_artchitecture_userscript"
    assert "test" in data["scripts"]
    assert "lint" in data["scripts"]


def test_pyproject_toml_is_valid():
    toml_path = REPO_ROOT / "pyproject.toml"
    with open(toml_path, "rb") as f:
        data = tomllib.load(f)
    assert "tool" in data
    assert "ruff" in data["tool"]
