'use strict';

const blankStruct = {
    success: null,
    message: "",
    data: null
};

const usersList =
{
    "1": {
        id: 1,
        name: 'Cristiano Ronaldo',
        wallet_address: 'abc',
        profile_pic: 'https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg'
    },
    "2": {
        id: 2,
        name: 'Lionel Messi',
        wallet_address: 'xyz',
        profile_pic: 'https://i.pinimg.com/originals/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg'
    }

}

exports.getUsers = async (userId) => {
    return [usersList[userId]];
}