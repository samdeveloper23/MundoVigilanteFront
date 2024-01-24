import { useEffect, useState } from "react";
import useAuth from '../../hooks/useAuth';
import { Navigate, useParams  } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import useSingleUser from '../../hooks/useSingleUser';
import onwerUserService from '../../services/onwerUserService';

import io from "socket.io-client";
import Chat from "./Chat";
import {
  Container,
  Card,
  CardContent,
  Form,
  FormField,
  Button,
  Icon,
} from "semantic-ui-react";
const socket = io.connect("http://localhost:3000");

function ChatPage() {
  const { userId } = useParams();
  const { user } = useSingleUser(userId);
  const { token } = useAuth();

  if (!token) return <Navigate to='/login' />;
  

  const [showChat, setShowChat] = useState(false);
  const [userOwner, setUserOwner] = useState('');

  const joinRoom = () => {
    
        socket.emit("join_room", '1');   
        setShowChat(true);
  
  };

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const userData = await onwerUserService(token);
            setUserOwner(userData);
        } catch (error) {
            console.error(error);
        }
    };
    fetchUser();
}, [token]);

  console.log(userId);
  return (
    <div>
    <Container>
      {!showChat?(
        <Card fluid>
        <CardContent header="Unirme al chat" />
        <CardContent>
          <Form>
            <FormField>
              <label>Unirme como {userOwner.username}</label>
              <p>aquí la politica de uso de la sala</p>
              
            </FormField>
            
            

            <Button onClick={joinRoom}>Unirme</Button>
          </Form>
        </CardContent>
        <CardContent extra>
          <Icon name="user" />3
        </CardContent>
      </Card>
      ) : (
      <Chat socket={socket} username={userOwner.username} avatar={userOwner.avatar} room='1' token={token}/>
      )}
    </Container>
    <Footer />
    </div>
  );
}

export default ChatPage;

//<h1>hi world!! very happy!!</h1>
/**
 *  Pero que bien vivo viendo codear!
 *            __..--''``---....___   _..._    __
 *        _.-'    .-/";  `        ``<._  ``.''_ `.
 *    _.-' _..--.'_    \                    `( ) )
 *   (_..-'    (< _     ;_..__               ; `'
 *             `-._,_)'      ``--...____..-'
 */
/**                     ;,_            ,
*                   _uP~"b          d"u,
*                  dP'   "b       ,d"  "o
*                 d"    , `b     d"'    "b
*                l] [    " `l,  d"       lb
*                Ol ?     "  "b`"=uoqo,_  "l
*              ,dBb "b        "b,    `"~~TObup,_
*            ,d" (db.`"         ""     "tbc,_ `~"Yuu,_
*          .d" l`T'  '=                      ~     `""Yu,
*        ,dO` gP,                           `u,   b,_  "b7
*       d?' ,d" l,                           `"b,_ `~b  "1
*     ,8i' dl   `l                 ,ggQOV",dbgq,._"  `l  lb
*    .df' (O,    "             ,ggQY"~  , @@@@@d"bd~  `b "1
*   .df'   `"           -=@QgpOY""     (b  @@@@P db    `Lp"b,
*  .d(                  _               "ko "=d_,Q`  ,_  "  "b,
*  Ql         .         `"qo,._          "tQo,_`""bo ;tb,    `"b,
* (qQ         |L           ~"QQQgggc,_.,dObc,opooO  `"~~";.   __,7,
* `qp         t\io,_           `~"TOOggQV""""        _,dg,_ =PIQHib.
*  `qp        `Q["tQQQo,_                          ,pl{QOP"'   7AFR`
*    `         `tb  '""tQQQg,_             p" "b   `       .;-.`Vl'        HOLA!!!!!!!!
*               "Yb      `"tQOOo,__    _,edb    ` .__   /`/'|  |b;=;.__
*                             `"tQQQOOOOP""        `"\QV;qQObob"`-._`\_~~-._
*                                  """"    ._        /   | |oP"\_   ~\ ~\_  ~\
*                                          `~"\ic,qggddOOP"|  |  ~\   `\  ~-._
*                                            ,qP`"""|"   | `\ `;   `\   `\
*                                 _        _,p"     |    |   `\`;    |    |
*                                  "boo,._dP"       `\_  `\    `\|   `\   ;
*                                   `"7tY~'            `\  `\    `|_   |
*                                                            `~\  |*/
