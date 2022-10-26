export class UserEntity {
    constructor(user) {
        this._id = user.id;
        this._name = user.name;
        this._email = user.email;
        this._status = user.status;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get status() {
        return this._status;
    }
    isActive() {
        return this._status === 'active';
    }
    toAwaiting() {
        return new UserEntity({ ...this, status: 'awaiting' });
    }
}
