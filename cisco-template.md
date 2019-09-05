## Lab template

```text
conf t
no ip icmp rate-limit unreachable
no ip domain lookup
line con 0
 exec-timeout 0 0
 privilege level 15
 logging synchronous
 no login
line vty 0 4
 privilege level 15
 password cisco
 login
 transport input all
```

## My Cisco IOS aliases for labs

```text
alias exec i    show ip int br | e unassigned
alias exec if   show ip int br
alias exec ip   show ip protocols
alias exec ir   show ip route | b ^Gateway
alias exec irf  show ip route
alias exec ire  show ip route eigrp | b ^Gateway
alias exec iref show ip route eigrp
alias exec iro  show ip route ospf | b ^Gateway
alias exec irof show ip route ospf
alias exec irr  show ip route rip | b ^Gateway
alias exec irrf show ip route rip
alias exec iei  show ip eigrp int
alias exec iet  show ip eigrp topoplogy
alias exec ied  show ip eigrp neighbor
alias exec ioi  show ip ospf int brief
alias exec iod  show ip ospf database
alias exec ion  show ip ospf neighbor
```
