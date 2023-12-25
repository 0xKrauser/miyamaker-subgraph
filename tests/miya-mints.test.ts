import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { Deployed } from "../generated/schema"
import { Deployed as DeployedEvent } from "../generated/MiyaMints/MiyaMints"
import { handleDeployed } from "../src/miya-mints"
import { createDeployedEvent } from "./miya-mints-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let deployer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let collection = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let aligned = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let salt = Bytes.fromI32(1234567890)
    let newDeployedEvent = createDeployedEvent(
      deployer,
      collection,
      aligned,
      salt
    )
    handleDeployed(newDeployedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Deployed created and stored", () => {
    assert.entityCount("Deployed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Deployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "deployer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Deployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collection",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Deployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "aligned",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Deployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "salt",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
