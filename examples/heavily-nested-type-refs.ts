// Test case for referencing heavily nested types through the root namespace

import Sink from 'sink-npm';

export function heavily_nested_model_ref(model: Sink.DeeplyNested.LevelOne.LevelTwo.ModelLevel3) {
  console.log(model);
}

export function ref_through_parent_resource(model: Sink.DeeplyNested.ModelLevel1) {
  console.log(model);
}

export function ref_through_defining_resource(model: Sink.DeeplyNested.LevelOne.ModelLevel1) {
  console.log(model);
}
