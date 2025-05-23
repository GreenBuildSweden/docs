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

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  entityName.value = params.get('entity') || 'product';
});
</script>

<MinidocStyles />

## What is a component?

<!--@include: ../../documentation/__partials/component-explanation.md -->

## Adding a component to your {{ entityName }}

Tick the boxes next to the components you want to add, then click `Add component`. The sidepanel will close, and the selected components will appear in the **Components section** table.

![Image of the components table](/images/product/added-component.jpg)

:::tip Work smarter, not harder
You can use the search inputs at the top of the sidepanel to search for components by name or article number.
:::

Clicking the name of a component in the list will open a sidepanel where you can inspect its data.

## What's in the sidepanel?

The list in the **Add component sidepanel** shows all the components and products that are available in your catalog and library.

<!--@include: ../../documentation/__partials/library-vs-catalog.md -->

You can add both _component entities_ and _product entities_ in the **Components section**. Components and products can be created by you, or imported from your suppliers.

:::warning Nothing in the list?
If this list is empty, you need to create a component or product, add supplier products to your library, or request a component from a supplier first.

Learn more about this in the full documentation. You can find it by clicking the `Read full docs` button at the top right of this window.
:::

## Difference between components and products

The entities `Product` and `Component` are almost identical, and both can be added to a product in the `components` section.

The key difference is that a `Component` is intended for internal use only within your company, meaning it cannot have individual reporting, such as an EPD, on its own.