import requests

BASE_URL = "https://jsonplaceholder.typicode.com"

"""
To enable this option, make sure to add the following to your `qase.config.json`

```json
{
    "profilers": [
       "network"
    ],
}
```
"""


def test_get_posts():
    """Test GET /posts endpoint."""
    response = requests.get(f"{BASE_URL}/posts")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_get_single_post():
    """Test GET /posts/{id} endpoint."""
    response = requests.get(f"{BASE_URL}/posts/1")
    assert response.status_code == 200
    assert response.json()["id"] == 1


def test_create_post():
    """Test POST /posts endpoint."""
    payload = {"title": "foo", "body": "bar", "userId": 1}
    response = requests.post(f"{BASE_URL}/posts", json=payload)
    assert response.status_code == 201
    assert response.json()["title"] == payload["title"]


def test_update_post():
    """Test PUT /posts/{id} endpoint."""
    payload = {"id": 1, "title": "updated", "body": "updated content", "userId": 1}
    response = requests.put(f"{BASE_URL}/posts/1", json=payload)
    assert response.status_code == 200
    assert response.json()["title"] == "updated"


def test_delete_post():
    """Test DELETE /posts/{id} endpoint."""
    response = requests.delete(f"{BASE_URL}/posts/1")
    assert response.status_code == 200
