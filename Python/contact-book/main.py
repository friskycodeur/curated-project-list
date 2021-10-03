import pickle


# SAVING CONTACTS
def save():
    f = open("contacts.txt",'wb')
    record = []
    while True:
        name = str(input("Enter the name of the contact:"))
        phone = int(input("Enter the contact number:"))
        e_mail = str(input("Enter the e-mail:"))
        location = str(input("Enter the address:"))
        final_data = [name, phone, e_mail, location]
        record.append(final_data)
        print("Saving...")
        ch = str(input("Do you want to enter more?"))
        if ch == "N" or ch == "n":
            break
    record = pickle.dump(record, f)
    f.close()


# SEARCHING CONTACTS
def search():
    f = open("contacts.txt",'rb+')
    record = pickle.load(f)
    g = str(input("Enter the name you want to find details for:"))
    for i in record:
        if i[0] == g:
            print("Searching...")
            print("Contact found! The details are:")
            print("Name: ",i[0], "Contact No.: ",i[1], "E-mail address: ",i[2],"Location: ",i[3])


# UPDATING CONTACTS
def update():
    f = open("contacts.txt", 'rb+')
    r = str(input("Enter the name of the contact:"))
    f.seek(0)

    def choose():

        print("---------------------------------------------------")
        print("Enter 1 to update Name:")
        print("Enter 2 to update Contact Number:")
        print("Enter 3 to update E-mail address:")
        print("Enter 4 to update Location(address):")
        print("---------------------------------------------------")
        cho = int(input("Enter your choice:"))
        if cho == 1:
            i[0] = str(input("Enter new name:"))
            print("Updating...")
            f.seek(rpos)
            pickle.dump(s, f)
        elif cho == 2:
            i[1] = int(input("Enter new number:"))
            print("Updating...")
            f.seek(rpos)
            pickle.dump(s, f)
        elif cho == 3:
            i[2] = str(input("Enter new e_mail address:"))
            print("Updating...")
            f.seek(rpos)
            pickle.dump(s, f)
        elif cho == 4:
            i[3] = str(input("Enter new location(address):"))
            print("Updating...")
            f.seek(rpos)
            pickle.dump(s, f)
        else:
            return
        c = int(input("Enter 6 to update other fields and 7 to abort update:"))
        if c == 6:
            choose()
        else:
            return
    try:
        while True:
            rpos = f.tell()
            s = pickle.load(f)
            for i in s:
                if i[0] == r:
                    choose()
    except Exception:
        f.close()


# READING CONTACTS
def reads():
    f = open("contacts.txt",'rb')
    record = pickle.load(f)
    for i in record:
        print(i)


# DELETING CONTACTS
def delete():
        f = open("contacts.txt", 'rb')
        record = pickle.load(f)
        f.close()
        f = open("contacts.txt", 'wb')
        new_list = []
        delete = str(input("Enter the contact name to be deleted:"))
        for i in record:
            if i[0] == delete:
                continue
            new_list.append(i)
        pickle.dump(new_list, f)
        f.close()


# MAIN FUNCTION
def choices():
    print("--------------------------------------------------------")
    print("Enter 1 to enter contacts:")
    print("Enter 2 to view contacts:")
    print("Enter 3 to search contacts:")
    print("Enter 4 to update contacts:")
    print("Enter 5 to delete contacts:")
    print("Enter 6 to EXIT:")
    print("---------------------------------------------------------")
    choi = int(input("Enter your choice:"))
    if choi == 1:
        save()
        choices()
    elif choi == 2:
        reads()
        choices()
    elif choi == 3:
        search()
        choices()
    elif choi == 4:
        update()
        choices()
    elif choi == 5:
        delete()
        choices()
    elif choi == 6:
        print("Exiting....")
        print("-----------------------------------------------------")
    else:
        print("Wrong choice entered!")


choices()
