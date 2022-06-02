<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/cv">
    <xsl:output method:"html" version:"5.0" encoding="UTF-8" indent="yes" />
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
      <head>
        <title>curriculum.<xsl:value-of select="lang"/></title>
        <link rel="stylesheet" type="text/css" href="cv.css"/>
      </head>
      <body>
        <div id="info">
          <h2><xsl:value-of select="full_name"/></h2>
          <div id="info-top">
            <div id="info-left">
              <p>
                <xsl:value-of select="dob"/><br/>
                <xsl:value-of select="address/line1"/><br/>
                <xsl:value-of select="address/line2"/><br/>
              </p>
            </div>
            <div id="info-right">
              <p>
                <xsl:value-of select="tlf"/><br/>
                <xsl:value-of select="email"/><br/>
                <xsl:value-of select="github"/><br/>
              </p>
            </div>
          </div>
        <div>
          <p id="intro-info">
            <xsl:value-of select="intro"/>
          </p>
        </div>
      </div>
        <div id="work">
          <h2><xsl:value-of select="section_title"/></h2>
          <xsl:for-each select="works/work">
          </xsl:for-each>
        </div>
        <div id="learn">
          <xsl:for-each select="learns/learn">
          </xsl:for-each>
        </div>
        <div id="skill">
          <xsl:for-each select="skills/skill">
          </xsl:for-each>
        </div>
        <div id="misc">
          <xsl:for-each select="miscs/misc">
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="work">
    <div id="work" class="section">
    </div>
  </xsl:template>
  <xsl:template match="learn">
    <div id="learn" class="section">
    </div>
  </xsl:template>
  <xsl:template match="skill">
    <div id="skill" class="section">
    </div>
  </xsl:template>
  <xsl:template match="misc">
    <div id="misc" class="section">
    </div>
  </xsl:template>
</xsl:stylesheet>
