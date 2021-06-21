import React from "react"
import { Button, Header, Icon, Item } from "semantic-ui-react"
import { userAvatarSrc } from "../../Common/constants"
import { User } from "../../Redux/Actions/UserActionTypes"
import CSS from "csstype"
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "../../Redux/store"
import { deleteUser } from "../../Redux/Actions/UserActions"

interface Props {
    user: User;
}

const buttonStyle: CSS.Properties =
{
    position: "absolute",
    right: "10px"
   
} 

export default function UserItemComponent({ user }: Props) {

    const dispatch = useDispatch();
    const usersState = useSelector((state: RootStore)=>state.users)
    const {deletingUser} = usersState;
    
    const handleDelete = ()=>
    {
        dispatch(deleteUser(user._id));
    }

    return (
        <Item>
            <Item.Image className="userImage" size="tiny" src={userAvatarSrc} />
                <Item.Content>
                <Header style={{ marginTop: 10 }} as="h3">
                    {`${user.name} ${user.surname   }`}
                </Header>
                <div style={{ marginTop: 10 }}>
                <a href={`mailto:${user.email}`} ><Icon name="mail" />{user.email}</a>
                </div>
            </Item.Content>
            <Button 
                loading={deletingUser === user._id}
                disabled={deletingUser === user._id}
                onClick={handleDelete}
                size="mini" 
                style={buttonStyle} 
                icon="x" 
                negative/>
        </Item>
    )
}