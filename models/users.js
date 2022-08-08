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
        wallet_address: '0xA5a2fc838c5345C1798866F593C9a887F795B44d',
        profile_pic: 'http://starsunfolded.com/wp-content/uploads/2016/06/Cristiano-Ronaldo.jpg'
    },
    "2": {
        id: 2,
        name: 'Lionel Messi',
        wallet_address: '0x623f826c61942b713558F326A6573E1cd973648d',
        profile_pic: 'https://i.pinimg.com/564x/a2/dc/37/a2dc37c1eb280879dc417736b9f08063.jpg'
    }

}

exports.getUsers = async (userId) => {
    return [usersList[userId]];
}