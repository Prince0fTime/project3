import axios from "axios";

export default {
  getSnippets: function(snippetData) {
    if (snippetData === undefined) {
      return axios.get("/api/snippets");
    } else {
      return axios.get("/api/snippets", { params: snippetData });
    }
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
