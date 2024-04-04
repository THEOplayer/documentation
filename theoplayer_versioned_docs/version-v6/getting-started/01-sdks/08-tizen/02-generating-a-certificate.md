# Setting up a Tizen device for debugging

Tizen requires a certificate to launch an application on a (physical) device. Below are the steps on how to create one:

Go to Tools → Certificate Manager

![](../../../../../theoplayer/assets/img/tizen-certificate-1.jpg)

In the Certificate Manager click the Add (plus) button to generate a new certificate.

![](../../../../../theoplayer/assets/img/tizen-certificate-2.jpg)

Generate a Tizen Certificate

![](../../../../../theoplayer/assets/img/tizen-certificate-3.jpg)

Give your certificate a profile name (name is free to pick)

![](../../../../../theoplayer/assets/img/tizen-certificate-4.jpg)

Pick “Create a new author certificate” if you have never used one. If you already have one, then you can choose to select an existing author certificate instead.

![](../../../../../theoplayer/assets/img/tizen-certificate-5.jpg)

If you decided to create a new author certificate, you will get this screen. Fill in the fields as requested with your own. Fill in a password. You can add additional fields when opening the “More details” component.

![](../../../../../theoplayer/assets/img/tizen-certificate-6.jpg)

Pick “Use the default Tizen distributor certificate”

![](../../../../../theoplayer/assets/img/tizen-certificate-7.jpg)

If everything went well, a pop-up will appear indicating that the certificate profile has been created.

![](../../../../../theoplayer/assets/img/tizen-certificate-8.jpg)

Your certificate should now be available for selection.

![](../../../../../theoplayer/assets/img/tizen-certificate-9.jpg)
