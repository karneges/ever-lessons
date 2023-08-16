import { expect } from "chai";
import {Contract, getRandomNonce, Signer, toNano, WalletTypes} from "locklift";
import { FactorySource } from "../build/factorySource";
import { Account } from "everscale-standalone-client";

let auctionContract: Contract<FactorySource["SimpleAuction"]>;
let signer: Signer;
let user:Account

describe("Test Sample contract", async function () {
  before(async () => {
    signer = (await locklift.keystore.getSigner("0"))!;
  });
  describe("Contracts", async function () {


    it("Deploy contract", async function () {
      user = await locklift.factory.accounts.addNewAccount({
        type:WalletTypes.EverWallet,
        value:toNano(10),
        publicKey:signer.publicKey,
      }).then(res =>res.account)
      const INIT_STATE = 0;
      console.log(Date.now() + 1000)

      const { contract } = await locklift.factory.deployContract({
        contract: "SimpleAuction",
        publicKey: signer.publicKey,
        initParams: {
          nonce:getRandomNonce(),
        },
        constructorParams: {
          _end:Math.floor(Date.now()/1000) + 1000,
          _start:Math.floor(Date.now()/1000) - 1000,
        },
        value: locklift.utils.toNano(2),
      });
      auctionContract = contract;
      expect(await locklift.provider.getBalance(auctionContract.address).then(balance => Number(balance))).to.be.above(0);

    });

    it("Interact with contract", async function () {

    const {traceTree} =  await locklift.tracing.trace(auctionContract.methods.bet().send({
        from:user.address,
        amount:toNano(4)
      }));
    await traceTree?.beautyPrint();
      console.log(await auctionContract.methods.getDetails().call())
    });
  });
});
