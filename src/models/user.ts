import sequelize from '../dal/database';
import DataTypes from "sequelize";

const userModel = sequelize.define('user', {
    idUser: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(254),
        allowNull: false
    },
});
// userModel.sync({ force: true });
export default userModel;
