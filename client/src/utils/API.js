import axios from "axios";

export default {
  getSnippets: function() {
    return axios.get("/api/snippets");
  },
  saveSnippet: function(snippetData) {
    return axios.post("/api/snippets", snippetData);
  },
  getSnippet: function(id) {
    return axios.get("/api/snippets/" + id);
  },
  updateSnippet: function(id, snippetData) {
    return axios.put("/api/snippets/" + id, snippetData);
  },
  deleteSnippet: function(id) {
    return axios.delete("/api/snippets/" + id);
  }
};
