---
layout: false
search: false
---

<script setup>
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()
</script>

<MinidocStyles />

## End of life properties and comparisons

This panel shows how the the selected material is used at the end of its life cycle.

## Generic vs specific data

By default, the material EOL properties will be set to use generic data. This works well when starting out, but to get the most accurate data, it is recommended to fill out data specific to you manufacturing process.

To do this, uncheck the `Use generic value` checkbox in the panel, and fill out the fields with the data for your manufacturing process.

## Fields

| Name | Description |
| --- | --- |
| Landfill | How much of the material is sent to landfills. |
| Recycling | How much of the material is sent to recycling centers. |
| Incineration | How much of the material is sent to incinerators. |
| Recycling | How much of the material is being recycled. |
| Total | The sum of all EOL fields. This must add up to 100%. |

All fields feature a button where you can edit the type of landfill, incineration and recycling. This data is used to calculate a more accurate environmental impact. In most cases, you will not need to change this.

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the EOL scenario. This graph is interactive, and can show data for multiple different impact categories.

## Comparing EOL

In some cases you may want to compare the currently used EOL scenario with an alternate one.

Click the `Compare` button in the top right corner of the panel. This will create an alternate EOL scenario that you can fill out in the same way as the main one.

You can remove a EOL scenario from the comparison by clicking the `Remove` button above the top right corner of the EOL properties.

To replace the currently added EOL with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.