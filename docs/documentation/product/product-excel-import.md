# Import products from Excel

Importing products from Excel is good when you have a lot of data to import, and already have it in other spreadsheets.

This is especially useful for companies skilled in manipulating spreadsheets.

:::tip Workflow tip
A common workflow is to first generate an empty export spreadsheet in Eando X, populate it with your data (in your spreadsheet editor of choice), and then import it back into Eando X.

Read more about exporting data [here](/documentation/product/product-excel-export).
:::

## Importing products

Navigate to the `Products` page in the left navigation menu and click the `Import` button in the top right corner.

![Image of the import products button](/images/product/import-button.jpg)

This will open a sidepanel where you can select the Excel file you want to import.

![Import products sidepanel](/images/product/import-modal.jpg)

It has the following options:

| Field name                            | Field description                                                                              |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Force autoshare setting**           | Decides wether the imported products should be shareable with other companies in Eando X.      |
| **Auto publish updates after import** | Decides wether the imported products should be published to the Eando X platform after import. |
| **Pick file**                         | Selects the Excel file you want to import.                                                     |

:::info Autoshare vs Publish
Products that have the _autoshare_ setting enabled will not be visible when other companies search for products in Eando X, but can be shared with them upon request.

Published products will be visible to all companies in Eando X when they search for products.
:::

When the file is uploaded, click the `Validate` button in the top right corner of the sidepanel to check if the data is valid. This will bring up the validation view.

The first thing you will see is the **Rows to import** tab. It will show you the data that will be imported.

![Validation view](/images/product/rows-to-import-tab.jpg)

If there are any errors, they will show up in the **Errors** tab. Here you can see what the error is and where it occurred so that you have a chance to fix it.

![Validation view](/images/product/error-tab.jpg)

:::danger Check the data
Any rows with errors will not be imported. Make sure to check the errors tab, fix any potential errors in your spreadsheet, and try importing the data again.
:::

When you are ready to import the data, click the `Import` button in the top right corner. This will import the data, and start the impact calculation process for the products.

![Validation view](/images/product/importing.jpg)

When the import is complete, you will see a success message. Click the `X` button in the top left corner to close the sidepanel.

![Validation view](/images/product/import-finished.jpg)
