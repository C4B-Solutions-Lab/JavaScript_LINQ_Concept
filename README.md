# JavaScript LINQ Concept 1.0

![JavaScript LINQ Concept](/JLC_1_0_logo.png)

This library is aimed to work in FCU or in the FrontEnd apps in general and will serve the same purpose as LINQ in C# ! \
The parameters of methods of the same names like C#'s LINQ are exactly the same or as close as possible. \
\
My goal is to "copy" functionality from LINQ in C# and transfer it stright into plain JavaScript. \
\
I am not sure whether *the great* **Anders Hejlsberg** of *Microsoft* will welcome it or not, but for sure I am not breaking any rules of good software development.


I highly encourage reading this amazing article treating about [C# LINQ in detail](https://www.codeproject.com/Articles/383749/How-does-it-work-in-Csharp-Part-3-Csharp-LINQ-in-d "How does it work in C# ?") to better understand inner workings of LINQ ! \
By the way, taking advantage of the occasion there are 3 books that every C#-oriented developer should have on his/her shelf... \
(guess, whether I have them or not ? :smirk:)
 - [Essential C# 7.0 (6th Edition)](https://www.amazon.com/Essential-7-0-Addison-Wesley-Microsoft-Technology/dp/1509303588/ref=olp_product_details?ie=UTF8&me= "The Comprehensive, Expert Guide to C# Language Programming")&nbsp; - good for 0+ years of experience
 - [C# in Depth, Fourth Edition](https://www.manning.com/books/c-sharp-in-depth-fourth-edition "C# in Depth, Fourth Edition is your key to unlocking the powerful new features added to the language in C# 5, 6, and 7")&nbsp; - good for 2+ years of experience
 - [C# Deconstructed](https://www.apress.com/us/book/9781430266709 "Discover how C# works on the .NET Framework")&nbsp; - good for 6+ years of experience

##
## Version:&nbsp;:one:.:zero:
## Status:&nbsp;UAD&nbsp;[ Development ]&nbsp;:pushpin:
## Streamlined:&nbsp;YES
 - DPR #14:&nbsp;2020-05-?? &nbsp;&nbsp;??:?? ?M Local Time &nbsp;:no_entry:&nbsp;( GA architecture )&nbsp;Enhancement 6&nbsp;:no_entry:
    - features:
      - enabling creating partial queries with preserved dependency relationship between 1st & 2nd level sorting methods! 
 - DPR #13:&nbsp;2020-05-02 &nbsp;&nbsp;2:56 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( **GA architecture &nbsp; Enhancement 1** &nbsp;:bell: )&nbsp;**Enhancement 5**&nbsp;:heavy_check_mark:
    - the-already implemented methods are GA methods !&nbsp;:bell:
      - orderBy, orderByDescending, thenBy, thenByDescending are RC methods (sorting data with preserved dependency relationship between 1st & 2nd sorting methods) !
      - intorducing syntax checking
    - methods left to be implemented before releasing RC version are :
        - reverse, reverseExt, select, selectMany, join, leftJoin, contains, distinct, except, defaultIfEmpty, min, max, average, intersect ?, union ?
 - DPR #12:&nbsp;2020-04-26 &nbsp;&nbsp;7:31 AM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA architecture*&nbsp;:bell: )&nbsp;*Enhancement 4*
    - the-already implemented methods are GA methods !&nbsp;:bell:
      - orderBy, orderByDescending, thenBy, thenByDescending are UAD methods !
    - methods left to be implemented before releasing RC version are :
        - reverse, reverseExt, select, selectMany, join, leftJoin, contains, distinct, except, defaultIfEmpty, min, max, average, intersect ?, union ?
 - DPR #11:&nbsp;2020-04-23 &nbsp;&nbsp;5:19 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA architecture*&nbsp;:bell: )&nbsp;*Enhancement 3*
    - the-already implemented methods are GA methods !&nbsp;:bell:
      - orderBy && orderByDescending are UAD methods !
    - methods left to be implemented before releasing RC version are :
        - thenBy, thenByDescending, reverse, reverseExt, select, selectMany, join, leftJoin, contains, distinct, except, defaultIfEmpty, min, max, average, intersect ?, union ?
 - DPR #10:&nbsp;2020-04-19 &nbsp;&nbsp;3:35 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA architecture*&nbsp;:bell: )&nbsp;*Enhancement 2*
    - the-already implemented methods are GA methods !&nbsp;:bell:
      - orderBy && orderByDescending are UAD methods ! 
    - methods left to be implemented before releasing RC version are :
        - thenBy, thenByDescending, reverse, reverseExt, select, selectMany, join, leftJoin, contains, distinct, except, defaultIfEmpty, min, max, average, intersect ?, union ?
 - DPR #9:&nbsp;2020-04-14 &nbsp;&nbsp;4:04 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA architecture*&nbsp;:bell: )&nbsp;*Enhancement 1*
    - the-already implemented methods are GA methods !&nbsp;:bell:

 - DPR #8:&nbsp;2020-04-13 &nbsp;&nbsp;5:54 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA-towards design changes v3* )&nbsp;*α v3*


 - DPR #7:&nbsp;2020-04-12 &nbsp;&nbsp;7:02 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA-towards design changes v3* )&nbsp;*α v2*


 - DPR #6:&nbsp;2020-04-11 &nbsp;&nbsp;6:25 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA-towards design changes v3* )&nbsp;*α*


 - DPR #5:&nbsp;2020-04-10 &nbsp;&nbsp;1:15 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA-towards design changes v3* )&nbsp;*β*


 - DPR #4:&nbsp;2020-04-05 &nbsp;&nbsp;1:29 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA-towards design changes v2* )


 - DPR #3:&nbsp;2020-03-28 &nbsp;&nbsp;4:01 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *GA-towards design changes* )


 - DPR #2:&nbsp;2020-03-21 &nbsp;&nbsp;1:15 PM Local Time &nbsp;:heavy_check_mark:&nbsp;( *major design changes* )


 - DPR #1:&nbsp;2020-03-14 11:19 AM Local Time &nbsp;:heavy_check_mark:&nbsp;( *initial version* )
## Release Candidate Version Proposal: 2020-??-?? Local Time &nbsp;:bell:&nbsp;:heavy_check_mark:

#
## Download&nbsp;:lock:
#
## Dropbox MP4s:&nbsp; [How it works ?]&nbsp;:lock:
## License:&nbsp;:free:&nbsp;:heavy_check_mark:
#
## All stuff is developed under exclusive control from C4B Solutions Lab &nbsp;:registered:
## No any conflict of interests involved. 
##
## Developer:&nbsp; Łukasz Dąbrowski &nbsp;&nbsp;:poland:
### Title:&nbsp; [Engineer](https://medium.com/engineering-leadership/what-does-a-lead-engineer-do-ec8cdc119ff7 "What does an engineer do ?")
#
###### :information_source: &nbsp;&nbsp; [C4B Solutions](https://c4b-solutions.github.io)
