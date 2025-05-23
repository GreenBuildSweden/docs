# Creating a product request

One of the most powerful features of EandoX is the ability to use supplier components directly in your products. This ensures that you always have accurate, up-to-date LCAs, without having to ask the supplier for any sensitive business data. An added benefit is that your products stay up-to-date automatically when suppliers make changes to their components. This makes it easier to maintain accurate data over time.

If a supplier hasn't created a component you order from them yet, you can send them a product request.

:::warning Can't find your supplier?
Sending a product request requires that your supplier is part of the EandoX platform. If you cant find your supplier in the [list of suppliers](/documentation/supplier/adding-a-supplier), you will have to invite them.

Read more about inviting a supplier [here](/documentation/supplier/inviting-a-supplier).
:::

## Request a single product

Navigate to the `Supplier` page in the left navigation menu. Then click the name of the supplier you want to request a product from. You will be taken to the supplier page.

In the **Supplier products** section (under the **Pending requests** tab), click the `Create request` button.

![Create request button](/images/supplier/create-request-button.jpg)

This will open a sidepanel with a form to fill out.

![Create request sidepanel](/images/supplier/request-form.jpg)

The form will ask you to fill out the following information:

| Field name         | Field description                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contact email**  | The email address of the person you want to contact with the product request. This is usually prefilled with the email of the suppliers contact person. |
| **Product name**   | The name of the product you want to request.                                                                                                            |
| **Article number** | The article number of the product you want to request.                                                                                                  |
| **Message**        | An optional message to send to the supplier along with the request.                                                                                     |

:::danger Use the right article number!
The article number field refers to the article number of the _suppliers product_.

Do **not** use your own internal article number for this field, as this will make it harder for the supplier fulfill your request.
:::

Click the `Send Request` button to send the request to the supplier.

The request will now be added to the list on the **Pending requests** tab for the supplier.

![Pending request list](/images/supplier/sent-request.jpg)

## Request multiple products

Navigate to the `Supplier` page in the left navigation menu. Then click the name of the supplier you want to request products from. You will be taken to the supplier page.

In the **Supplier products** section, click the `Multi Request (XLSX)` button.

![Multi request button](/images/supplier/multi-request-button.jpg)

This will open a sidepanel with a form to fill out.

![Multi request modal](/images/supplier/multi-request-form.jpg)

The form will ask you to fill out the following information:

| Field name        | Field description                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Select XLS**    | The XLS file containing the article numbers and product names you want to request. <!--FIXME: example file-->                                           |
| **Contact email** | The email address of the person you want to contact with the product request. This is usually prefilled with the email of the suppliers contact person. |
| **Message**       | An optional message to send to the supplier along with the request.                                                                                     |

Click `Send Request` to send the request to the supplier.

The request will now be added to the list on the **Pending requests** tab for the supplier.

## Cancel a product request

Navigate to the `Supplier` page in the left navigation menu. In the list of pending requests, select the requests you want to cancel. Then click the `Cancel requests` button.
