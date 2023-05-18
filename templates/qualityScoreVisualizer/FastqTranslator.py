#!usr/bin/python
# Name: Hao Zhuang & Eric Mockler
# Group member: Eric Mockler
class PHREDreader:
    """Manipulate PHRED alphabet in PHRED+33 format"""
    def __init__(self, header, sequence, qualityScore):
        """Replace undesired characters to N """
        self.header = header
        self.sequence = sequence
        self.qualityScore = qualityScore
        

    #def ASCIIconverter(self):
     #   """Translate PHRED alphabet to ASCII, 
     #   translate to PHRED+33 format if input ASCII indicate PHRED+64 format"""
    #    stringList = []
    #    for chr in self.qualityScore:
    #        ascii = ord(chr)
    #        stringList.append(ascii)

    #    return(stringList)

    def ASCIIconverter(self):
        """Translate PHRED 64 to PHRED 33 format"""
        phredList = []
        phred33List = []
        phredDList = []
        for chr in self.qualityScore:
            ascii = ord(chr)
            phredList.append(ascii)
            if int(max(phredList)) > 73:
                for chr in self.qualityScore:
                    ascii = ord(chr)
                    phred33List.append(ascii-64)

                return(phred33List)
            else:
                    phredDList.append(ascii-33)
        return(phredDList)

        


class FastQreader:
    """
    Define objects to read FastQ files
    thisReader = FastQreader ('testTiny.fa')
    usage:    for head, seq in thisReader.readFasta():
    print (head,seq)
    """
    def __init__(self, fname=''):
        """constructor: saves attribute fname """
        self.fname = fname
    def doOpen (self):
        """Handle file opens, allowing STDIN """
        if self.fname is '':
            return sys.stdin
        else:
            return open(self.fname)
    def readFastq (self):
        """ Read an entire FastQ record and return sequence,
        raw nucleotide, optional sequence, and quality score"""
        header = ''
        sequence = ''
        headerOpt = ''
        qualityScore = ''

        with self.doOpen() as fileH:
            header = ''
            sequence = ''
            headerOpt = ''
            qualityScore = ''

            # skip to first fastq header
            line=fileH.readline()
            while not line.startswith('@'):
                line = fileH.readline()
            header =line[0:].rstrip()

            for line in fileH:
                if line.startswith ('@'):
                    #make sure line starts with header
                    yield header,sequence,headerOpt,qualityScore
                    header = line.rstrip()
                    sequence = fileH.readline()[0:].rstrip()
                    #I received help from Ah-Vihn
                    headerOpt =fileH.readline().rstrip()
                    qualityScore = fileH.readline()[0:].rstrip()
                else:
                    sequence = line[0:].rstrip()
                    headerOpt = fileH.readline().rstrip()
                    #headerOpt equals '+'
                    qualityScore = fileH.readline()[0:].rstrip()

        yield header,sequence,headerOpt,qualityScore

def main ():
    """Excution of PHREDreader output which are lists of ASCII values which represent the actual quality scores of our raw sequences"""
    # myReader = FastQreader('7_1.fastq')
    # use '7_1.fastq' to test PHRED+33, use 'Galaxy.fastq' to test PHRED+64
    myReader = FastQreader('example.fastq')
    for header,sequence,headerOpt,qualityScore in myReader.readFastq():
        #print (header + '\n'+ sequence + '\n'+ headerOpt + '\n'+ qualityScore)
        phredReader = PHREDreader(header,sequence,qualityScore)
        print (f"PHRED 33 scores: {phredReader.ASCIIconverter()}")

if __name__ == "__main__":
    main()
