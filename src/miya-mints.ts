import { Address } from "@graphprotocol/graph-ts";
import {
  Deployed as DeployedEvent,
  OwnershipChanged as OwnershipChangedEvent,
} from "../generated/MiyaMints/MiyaMints";
import { Collection, History } from "../generated/schema";

export function handleDeployed(event: DeployedEvent): void {
  let entity = new Collection(event.params.collection);

  entity.creator = event.params.deployer;
  entity.owner = event.params.deployer;
  entity.collection = event.params.collection;
  entity.aligned = event.params.aligned;

  entity.blockNumberCreated = event.block.number;
  entity.blockNumberUpdated = event.block.number;

  entity.blockTimestampCreated = event.block.timestamp;
  entity.blockTimestampUpdated = event.block.timestamp;

  entity.transactionHashCreated = event.transaction.hash;
  entity.transactionHashUpdated = event.transaction.hash;

  entity.save();

  let history = new History(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  history.address = event.params.collection;
  history.event = "Deployed";
  history.oldOwner = new Address(0x0000000000000000000000000000000000000000);
  history.newOwner = event.params.deployer;
  history.blockNumber = event.block.number;
  history.blockTimestamp = event.block.timestamp;
  history.transactionHash = event.transaction.hash;

  history.save();
}

export function handleOwnershipChanged(event: OwnershipChangedEvent): void {
  let entity = Collection.load(event.params.erc721m);
  if (!entity) return;

  entity.owner = event.params.newOwner;

  entity.blockNumberUpdated = event.block.number;
  entity.blockTimestampUpdated = event.block.timestamp;
  entity.transactionHashUpdated = event.transaction.hash;

  entity.save();

  let history = new History(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  history.address = event.params.erc721m;
  history.event = "OwnershipChanged";
  history.oldOwner = event.params.oldOwner;
  history.newOwner = event.params.newOwner;
  history.blockNumber = event.block.number;
  history.blockTimestamp = event.block.timestamp;
  history.transactionHash = event.transaction.hash;

  history.save();
}
