import React from 'react';
import { Link } from "gatsby"

import "../styles/bootstrap.min.css"

const zip = function(ar1, ar2, zipper) {
    return zipper 
      ? ar1.map((value, index) => zipper(value, ar2[index]))
      : ar1.map((value, index) => [value, ar2[index]])
    ;
  }

const Hanzi = ({ pageContext })=> (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Hanzi</a>
    </nav>

    <div class="container">
        <div class="row jumbotron">
            <div class="col-sm">
                <h5>Heisig number: {pageContext.number}</h5>                
                <h1>{pageContext.character} {pageContext.keyword}</h1>

                <ul class="list-inline">
                    {pageContext.alias.map(e => {
                        return <li class="list-inline-item" key={e}>
                            {e}
                        </li>;
                    })}
                </ul>

                <h2>Decomposition</h2>



                <ul>
                    {zip(pageContext.decomposition, pageContext.decomposition_names, (c, n) => {
                        return <li key={c}>
                            <Link to={`/character/${c}`}>
                                {c} {n}
                            </Link>
                        </li>;
                    })}
                </ul>

                {pageContext.decomposition.length == 0 &&
                    <p>No decomposition</p>
                }

                <h2>Pinyin</h2>

                <ul>
                    {
                    pageContext.pinyin.map(p => {
                        return <li key={p}>
                            {p}
                        </li>;
                    })}
                </ul>

                <h2>Meanings</h2>

                <ul>
                    {pageContext.meanings.map(m => {
                        return <li key={m}>
                            {m}
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    </div>
    </div>
)

export default Hanzi