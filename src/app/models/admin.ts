
export class Admin 
{
	adminId: number | undefined;
	username: string | undefined;
    password: string | undefined;

    firstName: string | undefined;
    lastName: string | undefined;
	
	
	constructor(adminId?: number, username?: string, password?: string, firstName?: string, lastName?: string)
	{
		this.adminId = adminId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
	}
}
