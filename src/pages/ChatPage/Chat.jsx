import { useEffect, useState, useRef } from "react";
import Avatar from "../../components/Avatar/Avatar";
import {
  FormField,
  Input,
  Form,
  CardContent,
  Card,
  Container,
  Message,
  MessageHeader,
  Divider,
} from "semantic-ui-react";
import ScrollToBottom from "react-scroll-to-bottom";

export const Chat = ({ socket, username, room, avatar }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (username && currentMessage) {
      const info = {
        message: currentMessage,
        room,
        author: username,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", info);
      setMessagesList((list) => [...list, info]);
      setCurrentMessage("");

      // Hacer scroll automáticamente después de enviar un mensaje
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const messageHandle = (data) => {
      setMessagesList((list) => [...list, data]);
    };
    socket.on("receive_message", messageHandle);

    return () => socket.off("receive_message", messageHandle);
  }, [socket]);

  return (
    <Container>
      <Card fluid>
        <CardContent header={`Chat MundoVigilante | En sala: ${room}`} />
        <ScrollToBottom>
          <CardContent style={{ maxHeight: "400px", overflowY: "auto" }}>
            {messagesList.map((item, i) => {
              return (
                <span key={i}>
                  <Message
                    style={{
                      textAlign: username === item.author ? "right" : "left",
                    }}
                    success={username === item.author}
                    info={username !== item.author}
                  >
                    <div className="avatarChat">
                      <Avatar avatar={avatar} username={item.author} />
                    </div>
                    <MessageHeader>{item.message}</MessageHeader>
                    <p>
                      Enviado por: <strong>{item.author}</strong> a las{" "}
                      <i>{item.time}</i>
                    </p>
                  </Message>
                  <Divider />
                </span>
              );
            })}
            <div ref={messagesEndRef} />
          </CardContent>
        </ScrollToBottom>

        <CardContent extra>
          <Form>
            <FormField>
              <div className="ui action input ">
                <Input
                  action={{
                    color: "teal",
                    labelPosition: "right",
                    icon: "send",
                    content: "Enviar",
                    onClick: sendMessage,
                  }}
                  value={currentMessage}
                  type="text"
                  placeholder="Mensaje..."
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                />
              </div>
            </FormField>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Chat;
