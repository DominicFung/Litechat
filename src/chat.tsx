// import { useEffect, useState } from "react"
// import { Client, GatewayIntentBits, TextBasedChannel } from 'discord.js'
// import React from "react"

// interface LiteChatProps {
//   secret: string,
//   channelId: string
// }

// export function LiteChat(props: LiteChatProps) {
//   const [client, setClient] = useState<Client<boolean>>()

//   const init = async () => {
//     const client = new Client({
//       intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.MessageContent
//       ],
//     })
  
//     client.login(props.secret)
  
//     console.log(client)
//     await new Promise<void>((resolve, reject) => {
//       client.once("error", reject)
//       client.once("ready", () => {
//         client.off("error", reject)
//         resolve()
//       })
//     })
  
//     console.log(client.isReady())
//     setClient(client)
//   }

//   const postDiscord = async () => {
//     console.log("post to discord")
//     if (client) {
//       const channel = client.channels.cache.get(props.channelId) as TextBasedChannel
//       console.log(channel)
    
//       if (channel) {
//         console.log(`channelId: ${channel.id}, type: ${channel.type}`)
    
//         let r = await channel.send("/imagine beautiful landing for puppy portrait website, ux/ui, ux, ui, cute, pink and blue --v 4 --ar 3:2 --q 2")
//         console.log(r)
//         console.log(" ==== DONE ==== ")
    
    
//       } else console.error("No Discord Channel Found.")
//     }
//   }

//   useEffect(() => { init() }, [])

//   return (
//     <>
//       <p>Ready? {client ? "yes" : "no"}</p>
//       <button onClick={postDiscord}>Click me</button>
//     </>
//   );
// }

import * as React from "react";

export function LiteChat() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
