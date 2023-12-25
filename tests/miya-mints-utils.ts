import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  Deployed,
  ERC721MiyaImplementation,
  MiyaAVImplementation,
  MiyaIdSet,
  OwnershipChanged,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred
} from "../generated/MiyaMints/MiyaMints"

export function createDeployedEvent(
  deployer: Address,
  collection: Address,
  aligned: Address,
  salt: Bytes
): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  deployedEvent.parameters.push(
    new ethereum.EventParam("deployer", ethereum.Value.fromAddress(deployer))
  )
  deployedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  deployedEvent.parameters.push(
    new ethereum.EventParam("aligned", ethereum.Value.fromAddress(aligned))
  )
  deployedEvent.parameters.push(
    new ethereum.EventParam("salt", ethereum.Value.fromFixedBytes(salt))
  )

  return deployedEvent
}

export function createERC721MiyaImplementationEvent(
  implementation: Address
): ERC721MiyaImplementation {
  let erc721MiyaImplementationEvent = changetype<ERC721MiyaImplementation>(
    newMockEvent()
  )

  erc721MiyaImplementationEvent.parameters = new Array()

  erc721MiyaImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return erc721MiyaImplementationEvent
}

export function createMiyaAVImplementationEvent(
  implementation: Address
): MiyaAVImplementation {
  let miyaAvImplementationEvent = changetype<MiyaAVImplementation>(
    newMockEvent()
  )

  miyaAvImplementationEvent.parameters = new Array()

  miyaAvImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return miyaAvImplementationEvent
}

export function createMiyaIdSetEvent(
  erc721: Address,
  vaultId: BigInt
): MiyaIdSet {
  let miyaIdSetEvent = changetype<MiyaIdSet>(newMockEvent())

  miyaIdSetEvent.parameters = new Array()

  miyaIdSetEvent.parameters.push(
    new ethereum.EventParam("erc721", ethereum.Value.fromAddress(erc721))
  )
  miyaIdSetEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )

  return miyaIdSetEvent
}

export function createOwnershipChangedEvent(
  erc721m: Address,
  oldOwner: Address,
  newOwner: Address
): OwnershipChanged {
  let ownershipChangedEvent = changetype<OwnershipChanged>(newMockEvent())

  ownershipChangedEvent.parameters = new Array()

  ownershipChangedEvent.parameters.push(
    new ethereum.EventParam("erc721m", ethereum.Value.fromAddress(erc721m))
  )
  ownershipChangedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipChangedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipChangedEvent
}

export function createOwnershipHandoverCanceledEvent(
  pendingOwner: Address
): OwnershipHandoverCanceled {
  let ownershipHandoverCanceledEvent = changetype<OwnershipHandoverCanceled>(
    newMockEvent()
  )

  ownershipHandoverCanceledEvent.parameters = new Array()

  ownershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverCanceledEvent
}

export function createOwnershipHandoverRequestedEvent(
  pendingOwner: Address
): OwnershipHandoverRequested {
  let ownershipHandoverRequestedEvent = changetype<OwnershipHandoverRequested>(
    newMockEvent()
  )

  ownershipHandoverRequestedEvent.parameters = new Array()

  ownershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverRequestedEvent
}

export function createOwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
