import React, { Fragment, useEffect, useState } from "react";
import { getPokemon } from "../../api/getters/pokemonGetters";
import Pokemon from "../../api/types/Pokemon";
import { SpriteFrame } from "../SpriteFrame";
import * as StringUtils from "../../util/StringUtils";
import BaseStatsGraph from "../BaseStatsGraph";


const PokemonPreview: React.FC = () => {

    const [pokemon, setPokemon] = useState<Pokemon|undefined>(undefined);
    
    useEffect(() => {
        getPokemon(Math.ceil(Math.random() * 150))
            .then(setPokemon);
    }, []);

    if (!pokemon)
        return null;

    return (
        <Fragment>
            <h3>No. {pokemon.id}<i>/</i> {StringUtils.capitalize(pokemon.name)}</h3>
            <SpriteFrame sprite={pokemon.sprites.front_default} size="lg"/>
            <p>HEIGHT<i>/</i> {pokemon.height / 10}m</p>
            <p>WEIGHT<i>/</i> {pokemon.weight / 10}kg</p>
            <p>BASE STATS <i>/</i></p>
            <BaseStatsGraph
                values={pokemon.stats.map(stat => stat.base_stat)}
            />
        </Fragment>
    )
}

export default PokemonPreview;