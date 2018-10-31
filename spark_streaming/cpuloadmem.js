#!/usr/bin/env node

var dateFormat = require('dateformat')
var os = require("os"),
    MicroGear = require('microgear')

const APPKEY    = 'APPKEY'
const APPSECRET = 'APPSECRET'
const APPID     = 'APPID'
const GEARNAME = 'GEARNAME'
const TOPIC = '/MYTOPIC'
var microgear = MicroGear.create({
    gearkey : APPKEY,
    gearsecret : APPSECRET
})

microgear.setCachePath('microgear-' + GEARNAME + '.cache')

microgear.on('connected', function() {
    console.log('Connected NETPIE...')
    microgear.setAlias(GEARNAME)

    var olds = os.cpus()
    setInterval(function(){
	d = new Date()
        var cpus = os.cpus()
	var isotime = dateFormat(d, "yyyy-mm-dd'T'HH:MM:sso")
        var user=0,nice=0,sys=0,idle=0,counter=0
		var loadavg = os.loadavg(1)
		var freemem = os.freemem();
        var totalmem = os.totalmem()

        for(var i = 0, len = cpus.length; i < len; i++) {
            var cpu = cpus[i], old = olds[i], total = 0
            for(type in cpu.times)
                total += (cpu.times[type] - old.times[type]) 
            user+=(100 * (cpu.times.user - old.times.user)/ total)
            nice+=(100 * (cpu.times.nice - old.times.nice)/ total)
            sys+=(100 * (cpu.times.sys - old.times.sys)/ total)
            idle+=(100 * (cpu.times.idle - old.times.idle)/ total)
            counter++
        }
        olds = cpus

        var h = os.hostname()
        var l = parseFloat(loadavg).toFixed(2)
        var c = (100-(idle/counter)).toFixed(2)
        var m = ((1-(freemem/totalmem))*100).toFixed(2)
        var message = `{"ts": "${isotime}", "id": "${h}", "loadavg": ${l}, "cpu": ${c}, "mem": ${m}}`
	console.log('sending message...' + message)	
	microgear.publish(TOPIC,message)
    },5000)

})

microgear.on('closed', function() {
    console.log('Closed...');
})

microgear.connect(APPID)

