import { v4 } from "uuid";

import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagArray } from "../../structures/TagArray";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_array = _test_is(
    "array tag",
    TagArray.generate,
    TSON.createIs<TagArray>(),
    TagArray.SPOILERS,
);
