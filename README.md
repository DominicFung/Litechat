# `@domfung/litechat`

> This `@domfung/litechat` is an open source react/tailwind chat you can integrate into your frontend that hooks up to discord as a chatbot. Now you can chat directly with customers on your website directly on your discord channel! 

> Dom owns the shared backend (FREE for now!), however an example is provided for AWS (cdk, serverless) if you wish to deploy your own.

[![npm version](https://badge.fury.io/js/%40apollo%2Fserver.svg)](https://badge.fury.io/js/%40apollo%2Fserver)
[![Build Status](https://circleci.com/gh/apollographql/apollo-server.svg?style=svg)](https://circleci.com/gh/apollographql/apollo-server)
[![Join the community](https://img.shields.io/discourse/status?label=Join%20the%20community&server=https%3A%2F%2Fcommunity.apollographql.com)](https://community.apollographql.com)
[![Join our Discord server](https://img.shields.io/discord/1022972389463687228.svg?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff&style=flat-square)](https://discord.gg/graphos)

## A Simple Chat Component for your Frontend

```bash
npm i @domfung/litechat
```

to use:

```typescript
import { LiteChat } from '@domfung/litechat'

...

return (
  ...
    <LiteChat storeId="<YOUR STORE ID>" enableCookie={true} />
  </>
)

```

## Advanced Usage

To customize the storage of
