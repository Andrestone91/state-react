import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchResult } from "hooks";

function SearchForm() {
  const navigate = useNavigate();
  const results = useSearchResult();
  function handleSubmit(e) {
    e.preventDefault();
    const q = e.target.s.value;
    if (q) {
      navigate("/search/" + q, { replace: true });
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="s"
        placeholder="API de mercado libre con React"
      />
      <button className="boton">Buscar</button>
      <h4>resultados:{results.length}</h4>
    </form>
  );
}

export { SearchForm };
