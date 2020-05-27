import websockets
import asyncio

clients = []

async def clientHandler(websocket,path):
   clients.append(websocket)
   async for message in websocket:
       for client in clients:
           print("Message recu : " + message)
           await client.send(message)
   # while True:
    #    receivedMessage = await websocket.recv()
     #   print("Message recu : "+ receivedMessage)
      #  await websocket.send(receivedMessage)


server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(server)
asyncio.get_event_loop().run_forever()