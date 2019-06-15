import { SecurityContext } from '@angular/core';
import { SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
export class DomsanitizationService {

  sanitize(context: SecurityContext, value: any) : string
    bypassSecurityTrustHtml(value: string) : SafeHtml
    bypassSecurityTrustStyle(value: string) : SafeStyle
    bypassSecurityTrustScript(value: string) : SafeScript
    bypassSecurityTrustUrl(value: string) : SafeUrl
    bypassSecurityTrustResourceUrl(value: string) : SafeResourceUrl

}