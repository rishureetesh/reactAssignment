from flask import Flask, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config["SECRET_KEY"] = "secret key"
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'systemdb'
app.config['MYSQL_DATABASE_DB'] = 'mydb'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

@app.route("/")
def home():
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select ticket.ticket_id,ticket.message,ticket.ticket_gen_loc,ticket.ticket_gen_time,ticket.ticket_status,"
                              "queue.status,queue.slot,queue.source_address,queue.dest_address,customer.cust_name,customer.cust_phone,"
                              "customer.cust_alt_phone,network_partner.np_name from ticket INNER JOIN queue on queue.queue_id=ticket.queue_id "
                              "INNER JOIN customer on queue.cust_id=customer.cust_id INNER JOIN network_partner on network_partner.np_id=queue.np_id;")
        dataset = cursor.fetchall()
        data = []
        for row in dataset:
            singleData = {
                "ticket_id": row[0],
                "message": row[1],
                "ticket_gen_loc": row[2],
                "ticket_gen_time": row[3],
                "ticket_status": row[4],
                "status": row[5],
                "slot": row[6],
                "source_address": row[7],
                "dest_address": row[8],
                "cust_name": row[9],
                "cust_phone": row[10],
                "cust_alt_phone": row[11],
                "np_name": row[12]
            }
            data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/customer")
def customer():
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select * from customer")
        dataset = cursor.fetchall()
        data = []
        for row in dataset:
            singleData = {
                "cust_id": row[0],
                "cust_name": row[1],
                "cust_phone": row[2],
                "cust_alt_phone": row[3]
            }
            data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/customer/<int:custid>/fetch")
def custdata(custid):
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select * from customer where cust_id="+str(custid))
        dataset = cursor.fetchone()
        data = []
        singleData = {
            "cust_id": dataset[0],
            "cust_name": dataset[1],
            "cust_phone": dataset[2],
            "cust_alt_phone": dataset[3]
        }
        data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/ticket", methods=["GET", "POST"])
def ticket():
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select * from ticket")
        dataset = cursor.fetchall()
        data = []
        for row in dataset:
            singleData = {
                "ticket_id": row[0],
                "message": row[1],
                "ticket_gen_time": row[2],
                "ticket_status": row[3],
                "ticket_gen_loc": row[4],
                "queue_id": row[5]
            }
            data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/ticket/<int:ticketid>/fetch")
def ticketdata(ticketid):
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select * from ticket where ticket_id=" + str(ticketid))
        dataset = cursor.fetchone()
        data = []
        singleData = {
            "ticket_id": dataset[0],
            "message": dataset[1],
            "ticket_gen_time": dataset[2],
            "ticket_status": dataset[3],
            "ticket_gen_loc": dataset[4],
            "queue_id": dataset[5]
        }
        data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/queue")
def queue():
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select * from queue")
        dataset = cursor.fetchall()
        data = []
        for row in dataset:
            singleData = {
                "queue_id":row[0],
                "amb_id": row[1],
                "cust_id": row[2],
                "np_id": row[3],
                "status": row[4],
                "slot": row[5],
                "source_address": row[6],
                "dest_address": row[7]
            }
            data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/queue/<int:queueid>/fetch")
def queuedata(queueid):
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select * from queue where queue_id=" + str(queueid))
        dataset = cursor.fetchone()
        data = []
        singleData = {
            "queue_id": dataset[0],
            "amb_id": dataset[1],
            "cust_id": dataset[2],
            "np_id": dataset[3],
            "status": dataset[4],
            "slot": dataset[5],
            "source_address": dataset[6],
            "dest_address": dataset[7]
        }
        data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/ticketamb/<int:ticketid>/fetch", methods=["GET", "POST"])
def ticketambdata(ticketid):
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select ticket.message,ticket.ticket_gen_loc,ticket.ticket_gen_time,ticket.ticket_status,"
                              "queue.status,ambassador.amb_name,ambassador.amb_phone,ambassador.amb_alt_phone from"
                              " ticket inner join queue on ticket.queue_id=queue.queue_id inner join ambassador on"
                              " queue.amb_id=ambassador.amb_id where ticket.ticket_id=" + str(ticketid))
        dataset = cursor.fetchone()
        data = []
        singleData = {
            "message": dataset[0],
            "ticket_gen_loc": dataset[1],
            "ticket_gen_time": dataset[2],
            "ticket_status": dataset[3],
            "queue_status": dataset[4],
            "amb_name": dataset[5],
            "amb_phone": dataset[6],
            "amb_alt_phone": dataset[7],
        }
        data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)


@app.route("/customer/<int:ticketid>", methods=["GET", "POST"])
def customdata(ticketid):
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        data = cursor.execute("select queue.slot,queue.source_address,queue.dest_address,customer.cust_name, "
                              "customer.cust_phone,customer.cust_alt_phone, network_partner.np_name from ticket inner join queue on"
                              " ticket.queue_id=queue.queue_id inner join customer on queue.cust_id = customer.cust_id "
                              " inner join network_partner on network_partner.np_id=queue.np_id where ticket.ticket_id=" + str(ticketid))
        dataset = cursor.fetchone()
        data = []
        singleData = {
            "slot": dataset[0],
            "source_address": dataset[1],
            "dest_address": dataset[2],
            "cust_name": dataset[3],
            "cust_phone": dataset[4],
            "cust_alt_phone": dataset[5],
            "np_name": dataset[6]
        }
        data.append(singleData)
    finally:
        conn.close()
        cursor.close()
    return jsonify(data)
