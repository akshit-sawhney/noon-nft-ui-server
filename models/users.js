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
        wallet_address: '0x259E6C78db09073D8f21230d519a2353AA189374',
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