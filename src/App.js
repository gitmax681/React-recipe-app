import React, { useEffect, useState } from "react";
import "./css/app.css";
import Try from "./components/Try";
import {
  generatePath,
  useHistory
} from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";

export default function App() {
  // const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  console.log(history)
  const getData = (e) => {
    e.preventDefault();
    setSearch("");
    const url = generatePath("/search/:q", { q: search });
  };
  const onUpdate = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div id="foo">
      <SearchBar getData={getData} onUpdate={onUpdate} search={search} />
    </div>
  );
}
