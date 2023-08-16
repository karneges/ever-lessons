const sampleAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_start","type":"uint32"},{"name":"_end","type":"uint32"}],"outputs":[]},{"name":"bet","inputs":[],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"value0","type":"uint32"},{"name":"value1","type":"uint32"},{"components":[{"name":"addr","type":"address"},{"name":"bid","type":"uint128"}],"name":"value2","type":"tuple"}]}],"data":[],"events":[{"name":"BidAccepted","inputs":[{"name":"addr","type":"address"},{"name":"bid","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"start","type":"uint32"},{"name":"end","type":"uint32"},{"components":[{"name":"addr","type":"address"},{"name":"bid","type":"uint128"}],"name":"currentWinner","type":"tuple"}]} as const
const simpleAuctionAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_start","type":"uint32"},{"name":"_end","type":"uint32"}],"outputs":[]},{"name":"bet","inputs":[],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_start","type":"uint32"},{"name":"_end","type":"uint32"},{"components":[{"name":"addr","type":"address"},{"name":"bid","type":"uint128"}],"name":"_winner","type":"tuple"}]}],"data":[{"key":1,"name":"nonce","type":"uint128"}],"events":[{"name":"BidAccepted","inputs":[{"name":"addr","type":"address"},{"name":"bid","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"nonce","type":"uint128"},{"name":"start","type":"uint32"},{"name":"end","type":"uint32"},{"components":[{"name":"addr","type":"address"},{"name":"bid","type":"uint128"}],"name":"currentWinner","type":"tuple"}]} as const

export const factorySource = {
    Sample: sampleAbi,
    SimpleAuction: simpleAuctionAbi
} as const

export type FactorySource = typeof factorySource
export type SampleAbi = typeof sampleAbi
export type SimpleAuctionAbi = typeof simpleAuctionAbi
