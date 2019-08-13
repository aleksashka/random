## Add an IP Address as trusted
```
fwconsole firewall trust IPADDRESSHERE
fwconsole firewall stop
fwconsole firewall start
```

## Remove an IP Address from trusted
```
fwconsole firewall untrust IPADDRESSHERE
fwconsole firewall stop
fwconsole firewall start
```

## fail2ban commands
`fail2ban-client status` — list jails\
`fail2ban-client status JAILNAMEHERE` — check specific jail\
`fail2ban-client set JAILNAMEHERE unbanip IPADDRESSHERE`

## Routing
```
cat >>/etc/sysconfig/network-scripts/route-eth0<<EOF
10.0.0.0/8 via 10.1.1.1 dev eth0
EOF
systemctl restart network.service
```
