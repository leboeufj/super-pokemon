// pokeAPICache.js module
// © Seamus Smith 2021

const Cache = {}

function getFromCache(query) {
    return Cache[query] ?? (Cache[query] = fetch(query).then(e=>e.json()))
}

const API_ENDPOINT = "https://pokeapi.co/api/v2"

class URLNotValidError extends Error {
    constructor(message) {
        super(message)
        this.name = 'URLNotValidError'
    }
}

export async function getFromEndpoint(endpoint, value) {
    const query = `${API_ENDPOINT}/${endpoint}/${value}`
    return getFromCache(query)
}

export async function getFromURL(query) {
    if (!query.startsWith(API_ENDPOINT))
        throw new URLNotValidError(`"${query}" is not a valid PokeAPI endpoint`)
    return getFromCache(query)
}
