###Description of this script
##  This script the duration of all intervals marked in tier 1 with non-null lables.  Durations, in milliseconds
##   will be written to a log file called "duration-log.txt", which you will be able to find in the same directory
##  holding your sound files after you run the script.
##  To run this script, you will have to have a bunch of sound files with accompanying text grids.  Actually,
##   the sound files are superfluous, since they are not needed to get duration. You could run this script
##   on a directory that had only text grids in it, but it is more likely that you will have both sounds and text grids.
##   The sound files will be ignored. The locations of things to be measured must be marked in tier 1 of the textgrid.  
##   Anything with a non-null label in that tier will be logged.
###End of description

##  Specify the directory containing your sound files in the next line:

directory$ = "C:\Praat Fest\test data\"

##  Now we will do some prep work to get your log file ready.  The first thing I usually do is
##  make sure that I delete any pre-existing variant of the log:

filedelete 'directory$'duration-log.txt

##  Now I'm going to make a variable called "header_row$", then write that variable to the log file:

header_row$ = "Filename" + tab$ "phoneme" + tab$ + "Duration (ms.)" +  newline$
header_row$ > 'directory$'duration-log.txt

##  Now we make a list of all the text grids in the directory we're using, and put the number of
##  filenames into the variable "number_of_files":

Create Strings as file list...  list 'directory$'*.TextGrid
number_files = Get number of strings

# Then we set up a "for" loop that will iterate once for every file in the list:

for j from 1 to number_files

     #    Query the file-list to get the first filename from it, then read that file in:

     select Strings list
     current_token$ = Get string... 'j'
     Read from file... 'directory$''current_token$'

     #    Here we make a variable called "object_name$" that will be equal to the filename minus the ".wav" extension:

     object_name$ = selected$ ("TextGrid")

     #  Now we figure out how many intervals there are in tier 1, and step through them one at a time.
     #  If an intervals label is non-null, we get its duration and write it to the log file.

     number_of_intervals = Get number of intervals... 1
     for b from 1 to number_of_intervals
          interval_label$ = Get label of interval... 1 'b'
          if interval_label$ <> ""
               begin_vowel = Get starting point... 1 'b'
               end_vowel = Get end point... 1 'b'
               duration = (end_vowel - begin_vowel) * 1000
              fileappend "'directory$'duration-log.txt" 'object_name$''tab$''interval_label$''tab$''duration:3''newline$'
          endif
     endfor

     #  By this point, we have gone through all the intervals for the current 
     #  textgrid, and written all the appropriate values to our log file.  We are now ready to go on to
     #  the next file, so we close can get rid of any objects we no longer need, and end our for loop

     select all
     minus Strings list
     Remove
endfor

# And at the end, a little bit of clean up and a message to let you know that it's all done.

select all
Remove
clearinfo
print All files have been processed.  What next?

## written by Katherine Crosswhite
## crosswhi@ling.rochester.edu
