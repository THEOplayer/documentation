# How-to Setup Storage Profiles

With [Live Clipping](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md) you can have clips stored directly to your preferred third-party cloud storage provider. This gives you additional control over storage costs and manage usage of media clips.

Not Available for Recordings or live-to-VOD assets

At this time, [Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/start-recording.md) cannot be configured to use a third-party cloud storage provider directly. You should follow the [How-to Get Media Assets](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/how-to-get-media-assets.md) guide to identify recordings for download and then you can upload them to your preferred provider of choice.

Additionally, if you are using our workflow for [live-to-VOD clipping](/documentation/pr-preview/pr-690/theolive/platform/live-clipping.md) with a CDN servable HLS asset, this must be stored to Dolby's cloud storage in order to orchestrate the CDN.

Similarly, **timelines** will always be stored in Dolby's storage subject to expiration rules.

## Configuring Account Storage Profile[​](#configuring-account-storage-profile "Direct link to Configuring Account Storage Profile")

You can start by adding a **storage profile** that will persist across the account so that you can reuse the configuration by name on all future [Create Clip](/documentation/pr-preview/pr-690/millicast/api/media-assets-create-media-asset.md) requests or as the default setting.

Use the [Create Account Storage Profile](/documentation/pr-preview/pr-690/millicast/api/account-create-storage-profile.md) endpoint to create a new storage profile.

* `name`: The label you can use to reference the profile.

* `default`: Whether to use this storage profile for all future requests as the default setting.

* `type`: Configuration for S3 or GCS storage locations.

* `options`: Additional configuration specific for each storage provider

  <!-- -->

  * **bucketName**: the name of the bucket
  * **objectPrefix**: similar to a folder path to help organize clips
  * **bucketRegion**: the region to use with your storage provider (optional)

The storage profile will have a unique `profileId` that is an assigned GUID that can be used in clipping requests. You do *not* need to include the protocol `s3://` or `gs://` in this configuration as that is indicated by the **type**.

Your choice of storage provider may have a limitation on allowed characters for object names. You should follow the same guidelines when choosing clip naming rules.

### How-to Validate the Storage Profile[​](#how-to-validate-the-storage-profile "Direct link to How-to Validate the Storage Profile")

Use the [Validate Third Party Storage Setup](/documentation/pr-preview/pr-690/millicast/api/account-validate-third-party-storage.md) endpoint to test whether or not a storage profile is properly configured. This will transfer a small test file to make sure that it can be written to your cloud storage provider.

```curl
curl --request POST \
  --url https://api.millicast.com/api/v3/account/media/storage/validate \
  --header 'authorization: Bearer abc123' \
  --data '
{
  "profileId": "xz23dk75fb4ac6a2949c39ef454a885adkde",
  "type": "gcs",
  "options": {
    "objectPrefix": "/streams/clips",
    "bucketName": "my-org-bucket"
  }
}
'

```

## Setting Up Cloud Storage[​](#setting-up-cloud-storage "Direct link to Setting Up Cloud Storage")

Dolby storage is used by default, but to use your own storage you will need to provide authorization to access.

### Google Cloud Storage[​](#google-cloud-storage "Direct link to Google Cloud Storage")

For the storage profile use the following settings:

| Key          | Description                                                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type         | Identify the storage provider, specifically **gcs**.                                                                                                                                    |
| bucketName   | The name of the bucket you want to use for storing clips. You can create multiple storage profiles if you have more than one bucket.                                                    |
| objectPrefix | Each object has a **gsutil URI** file path that contains an object prefix to use. You can find this from your Google Cloud Storage configuration **Objects** tab for a specific bucket. |
| bucketRegion | (optional) To specify a specific cloud region. Typically not used for Google Cloud Storage.                                                                                             |

Configuration:

| Cloud Provider       | Service Account                                                 |
| -------------------- | --------------------------------------------------------------- |
| Google Cloud Storage | `millicast-recording-service@millicast.iam.gserviceaccount.com` |

#### How-to Grant Authorization to a Bucket[​](#how-to-grant-authorization-to-a-bucket "Direct link to How-to Grant Authorization to a Bucket")

The following procedure explains how to grant Dolby upload access to Google Cloud Storage buckets. Upon completion, the Dolby service account will have the storage object creator role for the selected storage bucket.

1. Log in to your GCP account.
2. Within your GCP console, navigate to the bucket you wish to grant access to OptiView Real-time Streaming and select the **Permissions** tab.

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2024-02-14_at_2.30.39_pm-89ce1c4e7184043ef1e3cfe912ddf6c6.png)

3. Click the **Grant Access** link.

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2024-02-14_at_2.35.17_pm-9593ea2aed583695c0f829a2eb6436cb.png)

4. On the side panel that appears, enter the OptiView service account email `millicast-recording-service@millicast.iam.gserviceaccount.com` into the **New Principals** text box, and select the **Storage Object Creator** role. These are the minimum recommended permissions for enabling reliable upload access to your storage bucket.

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2024-02-14_at_2.37.07_pm-f6ef119f5055168f9f1a30b4af1e1ae6.png)

5. Click **Save** to confirm the provided details.
6. Check if the newly added service account is visible on the permissions list.

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2024-02-14_at_2.41.23_pm-088fcc30c0a6c8dfc66a9324a9906219.png)

### AWS S3[​](#aws-s3 "Direct link to AWS S3")

To configure Amazon's Simple Storage Service (S3) you need to provide authorization to our service.

1. Create an AWS S3 Bucket. See the official [AWS Getting Started](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) docs for instructions.
2. Update the bucket policy with credentials that permit Dolby to read and put objects.

#### How-to Set the Bucket Policy[​](#how-to-set-the-bucket-policy "Direct link to How-to Set the Bucket Policy")

Visit the official AWS [Adding a bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-bucket-policy.html) documentation for instructions.

Be sure to substitute the name of the bucket in the placeholder field `${BUCKET_NAME}`:

Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "allow-dolby-write",
      "Effect": "Allow",
      "Principal": {
        "AWS": ["arn:aws:iam::548863597864:role/millicast-recording-service"]
      },
      "Action": "s3:PutObject*",
      "Resource": "arn:aws:s3:::${BUCKET_NAME}/*"
    }
  ]
}

```

#### Supported S3 bucket regions[​](#supported-s3-bucket-regions "Direct link to Supported S3 bucket regions")

| Code           | Name                      |
| -------------- | ------------------------- |
| us-east-1      | US East (N. Virginia)     |
| us-east-2      | US East (Ohio)            |
| us-west-1      | US West (N. California)   |
| us-west-2      | US West (Oregon)          |
| ap-south-1     | Asia Pacific (Mumbai)     |
| ap-northeast-3 | Asia Pacific (Osaka)      |
| ap-northeast-2 | Asia Pacific (Seoul)      |
| ap-southeast-1 | Asia Pacific (Singapore)  |
| ap-southeast-2 | Asia Pacific (Sydney)     |
| ap-northeast-1 | Asia Pacific (Tokyo)      |
| ca-central-1   | Canada (Central)          |
| ca-west-1      | Canada West (Calgary)     |
| eu-central-1   | Europe (Frankfurt)        |
| eu-west-1      | Europe (Ireland)          |
| eu-west-2      | Europe (London)           |
| eu-west-3      | Europe (Paris)            |
| eu-north-1     | Europe (Stockholm)        |
| me-central-1   | Middle East (UAE)         |
| sa-east-1      | South America (São Paulo) |

To use a bucket created in a region that is not listed, please contact support.
