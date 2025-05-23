---
layout: false
search: false
---

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()

const entityName = ref('')
const articleName = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  entityName.value = params.get('entity') || 'product';
  articleName.value = params.get('article') || null;

  if (articleName.value) {
    articleName.value = decodeURIComponent(articleName.value);
  }
});
</script>

<MinidocStyles />

## Component properties and comparisons

This panel shows the properties of the selected linked component.

## Fields

Some of the fields are read-only, and some are editable. The read-only fields represent data that comes from the linked component/product. The editable fields are stored as part of the {{entityName}} you are currently editing<span v-if="articleName"> ("**{{articleName}}**" in this instance)</span>.


| Name | Description |
| --- | --- |
| Component name | The name of the component. |
| Article number | The article number of the component. |
| Component weight | The weight of a single quantity of the component. |
| Amount | How much of this component is used in the {{entityName}}<span v-if="articleName">&nbsp;"**{{articleName}}**"</span>, using the unit specified in the `Unit` field below. |
| Waste | The percentage of the component that is considered waste at the end of the manufacturing process. An `Amount` of _1kg_ with a `Waste` of _10%_ means that _0.1kg_ of the component is wasted. |
| Transfer Packaging | Wether or not to include the included components packaging in the final {{entityName}}<span v-if="articleName">&nbsp;"**{{articleName}}**"</span>. |
| Unit | The unit used to measure a single quantity of the component. |
| Supplier | The name of the components supplier (if any). |
| GWP total | The total global warming potential of the component. |


## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the component. This graph is interactive, and can show data for multiple different impact categories.

## Comparing components
In some cases, you may want to compare the linked component with an alternative one. This can be helpful for Eco Design efforts or when you're unsure if you've selected the correct component for your {{entityName}}<span v-if="articleName">&nbsp;("**{{articleName}}**")</span>.

### Adding a component to the comparison
To compare components, click the `Compare` button in the top right corner of the panel. This will open a sidepanel listing all the components in your catalog and library.

Select the component you want to compare with and click the `Add component` button. The selected component's properties will appear in the sidepanel, and its data will be displayed in the impact graph at the bottom.

### Removing a component from comparison
You can remove a component from the comparison by clicking the `Remove` button above the top right corner of the components properties.

### Replacing the current component with an alternative one
To replace the currently linked component with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.