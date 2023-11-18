"use client";

import Fuse from "fuse.js";
import { useState } from "react";

const dogs = [
  "Affenpinscher",
  "Afghan Hound",
  "Aidi",
  "Airedale Terrier",
  "Akbash Dog",
  "Akita",
];

const fuse = new Fuse(dogs);

function searchWithBasicApproach(query) {
  if (!query) {
    return [];
  }

  return dogs.filter((dog) => dog.toLowerCase().includes(query.toLowerCase()));
}

function searchWithFuse(query) {
  if (!query) {
    return [];
  }

  return fuse.search(query).map((result) => result.item);
}

function SearchResults(props) {
  if (!props.results) {
    return null;
  }

  if (!props.results.length) {
    return <p>There are no results for your query.</p>;
  }

  return (
    <ol>
      {props.results.map((result) => (
        <li key={result}>{result}</li>
      ))}
    </ol>
  );
}

export default function Search() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const query = event.target.elements.query.value;
          const useFuse = event.target.elements.fuse.checked;
          setSearchResults(
            useFuse ? searchWithFuse(query) : searchWithBasicApproach(query)
          );
        }}
      >
        <label htmlFor="query">Search for a dog breed: </label>
        <input type="search" id="query" />
        <input type="checkbox" name="fuse" />
        <label htmlFor="fuse"> Use Fuse.js</label>
        <button>Search</button>
      </form>

      <SearchResults results={searchResults} />
    </>
  );
}
