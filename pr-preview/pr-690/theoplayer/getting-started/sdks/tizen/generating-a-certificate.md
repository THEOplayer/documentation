# Setting up a Tizen device for debugging

Tizen requires a certificate to launch an application on a (physical) device. Below are the steps on how to create one:

Go to Tools → Certificate Manager

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-1-5dc8da6607b5532e09b09217eef7d97d.jpg)

In the Certificate Manager, click the Add (plus) button to generate a new certificate.

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-2-4e3672ee2e2fa8cbdcc9d518f3b8ce6a.jpg)

Generate a Tizen Certificate.

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-3-f5c7f5477ef3c33c0438c1f3be6aa5df.jpg)

Give your certificate a profile name (name is free to pick).

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-4-e8aad0838f338202f6ff8872dd43bbe1.jpg)

Pick “Create a new author certificate” if you have never used one. If you already have one, then you can choose to select an existing author certificate instead.

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-5-c08251931d95a82bbd050cd021acc7d5.jpg)

If you decided to create a new author certificate, you will get this screen. Fill in the fields as requested with your own. Fill in a password. You can add additional fields when opening the “More details” component.

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-6-c6150763460504d017b394943dbaf60d.jpg)

Pick “Use the default Tizen distributor certificate”.

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-7-81c3b7cc09f35744d96bcedf37a7e2ee.jpg)

If everything went well, a pop-up will appear indicating that the certificate profile has been created.

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-8-dc745be45feb631cdeb6a54185c9194c.jpg)

Your certificate should now be available for selection.

![](/documentation/pr-preview/pr-690/assets/images/tizen-certificate-9-1cc2cd3b3d2d3d75e8ccd0160942aff2.jpg)
