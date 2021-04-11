# Book Library - projekt

1. První tutoriál bylo potřeba zvolit si tým
2. Druhý tutoriál nám bude vysvěteln návrh a design
3. Konzultace
4. Konzultace

**Vše se završí hackatonem!**

## Návrh
- [První přednáška s návrhem](https://unicorncollege.sharepoint.com/sites/BCAAMSWA-ArchitekturacloudovchaplikacSoftwarovarchitekturaLt/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBCAAMSWA%2DArchitekturacloudovchaplikacSoftwarovarchitekturaLt%2FShared%20Documents%2FPrezen%C4%8Dn%C3%AD%20v%C3%BDuka%20%2D%20semin%C3%A1%C5%99e%20S1%2FRecordings%2FMeeting%20now%2D20210216%5F104124%2DMeeting%20Recording%2Emp4&parent=%2Fsites%2FBCAAMSWA%2DArchitekturacloudovchaplikacSoftwarovarchitekturaLt%2FShared%20Documents%2FPrezen%C4%8Dn%C3%AD%20v%C3%BDuka%20%2D%20semin%C3%A1%C5%99e%20S1%2FRecordings)
- [Druhá přednáška s návrhem](https://unicorncollege.sharepoint.com/sites/BCAAMSWA-ArchitekturacloudovchaplikacSoftwarovarchitekturaLt/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBCAAMSWA%2DArchitekturacloudovchaplikacSoftwarovarchitekturaLt%2FShared%20Documents%2FPrezen%C4%8Dn%C3%AD%20v%C3%BDuka%20%2D%20semin%C3%A1%C5%99e%20S1%2FRecordings%2FSch%C5%AFzka%20prob%C3%ADh%C3%A1%2D20210223%5F103339%2DZ%C3%A1znam%20sch%C5%AFzky%2Emp4&parent=%2Fsites%2FBCAAMSWA%2DArchitekturacloudovchaplikacSoftwarovarchitekturaLt%2FShared%20Documents%2FPrezen%C4%8Dn%C3%AD%20v%C3%BDuka%20%2D%20semin%C3%A1%C5%99e%20S1%2FRecordings)

K návrhům je potřeba projít projít sandboxové appky pro zachycení návrhu, ve kterých můžeme řádit. Každá ta appka (kniha) je určena pro určitého čtenáře, ale baví se pořád o jednom stejném problému:

- ["Sandbox Business request"](https://uuapp.plus4u.net/uu-bookkit-maing01/72c4b8947f6f4dba8e637f8413d429a1/book/page?code=home) - zde se zaznamenávají požadavky zákazníka. Jedná se o prvotní požadavky na applikaci, kterou chce ten zákazník vytvořit. Je to úplně první step v návrhu projektu. Funkční a nefunkční (výkon, odezva) požadavky, **Tahle kniha je určena zákazníkovi a byznys analytikovi, který ty požadavky sepisuje**
- ["Sandbox Business model"](https://uuapp.plus4u.net/uu-bookkit-maing01/f4ca418ef60640ac947931f6569e704d/book/page?code=home) - Appka je detailně analyzována z byznys modelu. Jasně si zde musíme stanovit přesně, co musí appka umět. Stanovují se procesy, funkčnosti, entity a také se zde stanovují typoví uživatelé, kteří s appkou budou pracovat - jaké funkčnosti budou ovládat. Jedná se o detailní návrh, který je ale čitelný zákazníkovi, který nemá technický background. **není zde technický návrh** - cílový čtenář je zákazník - tohle je jeho dokumentace jeho systému, který mu navrhujeme.
- ["Sandbox Application model"](https://uuapp.plus4u.net/uu-bookkit-maing01/f26ddc87e2a343d6891ac8b5ee7a7ecc/book/page?code=home) - tento dokument vzniká na základě byznys analýzy. Veškeré entity včetně aktérů jsou zde rozpracovany do technického řešení. Jaké jsou vazby mezi entitamy, aplikační rozhraní, uživatelské rozhraní, vizuál a mnoho dalšího. Prostě kompletní technická dokumentace. **Jedná se o technický návrh appky. Vytváří ho analytik, ale slouží jako vstupní podklady pro implementaci vývojáři, který bude appku vyvíjet**. Zároveň tato kniha slouží i pro zákazníka, pokud se orientuje v IT, má znalost o aplikačním rozhraní a chce si přečíst, jakým způsobem ta appka funguje z technického hlediska. 

**Dobrý je, že je tam i [vzorová appka uuJokes](https://unicornuniversity.net/cs/cloud-application-architecture), podle které se to dá naučit + - ukládají se tam práce lidí z prezenčního, takže je toho matroše k vzorovým řešením dost!**

### Modelovací jazyk, který je spojený s návrhem cloudové architektury