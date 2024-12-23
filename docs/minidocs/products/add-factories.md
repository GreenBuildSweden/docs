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

## What is a factory?

<!--@include: ../../documentation/__partials/factory-explanation.md -->

## Adding a factory to your product

Select the factories you want to add by ticking the box next to their name. Then click the `Add fatory` button in the top right corner of the sidepanel. This will close the sidepanel and the factories you selected will show up in the **Factories section** table.

![Image of the factories table](/images/product/added-factories.jpg)

:::tip Work smarter, not harder
You can use the search inputs at the top of the sidepanel to search for factories by name.
:::

### Factory division

It is not uncommon for a product to be manufactured and assembled in multiple factories. Therefore, you can add multiple factories to your product.

If the product has multiple factories, use the `Division` field in the **Factory section**to specify the percentage of manufacturing each factory contributed.

## What's in the sidepanel?

The list in the **Add factory sidepanel** shows all the factories that are available in your library. _Factory_ entities are created by you on the `Factories` page.

:::warning Nothing in the list?
If this list is empty, you need to create a factory first.

Learn more about this in the full documentation. You can find it by clicking the `Read full docs` button at the top right of this window.
:::

## Default factory data

You can create products without adding any factories to them.

If you don't add any factory entities to a product, Eando X will use generic factory data. This will lower the products data quality, and might make your environmental impact score worse.