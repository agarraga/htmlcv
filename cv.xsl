<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/cv">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
      <head>
        <title>curriculum alhegamu <xsl:value-of select="lang"/></title>
      </head>
      <body>
        <div id="info">
        </div>
        <div id="work">
          <xsl:match="works">
          <h2><xsl:value-of select="section_title"/></h2>
          <xsl:for-each select="work">
          </xsl:for-each>
          </xsl:mathch>
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
  <xsl:template match="work"></xsl:template>
  <xsl:template match="learn"></xsl:template>
  <xsl:template match="skill"></xsl:template>
  <xsl:template match="misc"></xsl:template>
</xsl:stylesheet>
