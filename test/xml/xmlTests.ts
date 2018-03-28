import * as should from 'should';
import { AutoRestSwaggerBATXMLService, AutoRestSwaggerBATXMLServiceModels as models } from './generated/Xml/autoRestSwaggerBATXMLService';

const baseUri = 'http://localhost:3000';
const testClient = new AutoRestSwaggerBATXMLService(baseUri);

describe('typescript', function () {
  describe('XML client', function() {
  it('should correctly deserialize a simple XML document', async function () {
    const slideshow = await testClient.xml.getSimple();
    should.exist(slideshow);

    should.exist(slideshow.author);
    slideshow.author.should.equal('Yours Truly');

    should.exist(slideshow.date);
    slideshow.date.should.equal('Date of publication');

    should.exist(slideshow.title);
    slideshow.title.should.equal('Sample Slide Show');

    should.exist(slideshow.slides);
    slideshow.slides.length.should.equal(2);

    slideshow.slides[0].title.should.equal('Wake up to WonderWidgets!');
    slideshow.slides[0].type.should.equal('all');
    should.not.exist(slideshow.slides[0].items);

    slideshow.slides[1].title.should.equal('Overview');
    slideshow.slides[1].type.should.equal('all');
    slideshow.slides[1].items.length.should.equal(3);
    slideshow.slides[1].items[0].should.equal('Why WonderWidgets are great');
    slideshow.slides[1].items[1].should.equal('');
    slideshow.slides[1].items[2].should.equal('Who buys WonderWidgets');
  });

  it('should correctly serialize a simple XML document', async function () {
    const slideshow: models.Slideshow = {
      author: 'Yours Truly',
      date: 'Date of publication',
      title: 'Sample Slide Show',
      slides: [
        { type: 'all', title: 'Wake up to WonderWidgets!' },
        {
          type: 'all',
          title: 'Overview',
          items: [
            'Why WonderWidgets are great',
            '',
            'Who buys WonderWidgets'
          ]
        }
      ]
    };

    await testClient.xml.putSimple(slideshow);
  });

  it('should correctly deserialize XML wrapped lists', async function () {
    const appleBarrel = await testClient.xml.getWrappedLists();

    should.exist(appleBarrel.goodApples);
    appleBarrel.goodApples.length.should.equal(2);
    appleBarrel.goodApples[0].should.equal('Fuji');
    appleBarrel.goodApples[1].should.equal('Gala');

    should.exist(appleBarrel.badApples);
    appleBarrel.badApples.length.should.equal(1);
    appleBarrel.badApples[0].should.equal('Red Delicious');
  });

  it('should correctly serialize XML wrapped lists', async function () {
    const appleBarrel: models.AppleBarrel = {
      goodApples: ['Fuji', 'Gala'],
      badApples: ['Red Delicious']
    };

    await testClient.xml.putWrappedLists(appleBarrel);
  });

  it('should correctly deserialize an empty XML list', async function () {
    const emptyList = await testClient.xml.getEmptyList();
    should.exist(emptyList);
    should.not.exist(emptyList.author);
    should.not.exist(emptyList.date);
    should.not.exist(emptyList.title);

    this.skip();
    // TODO: list properties should always be present even if there are no list elements
    should.exist(emptyList.slides);
    emptyList.slides.length.should.equal(0);
  });

  it('should correctly serialize an empty XML list', async function () {
    const emptyObject: models.Slideshow = {};
    await testClient.xml.putEmptyList(emptyObject);

    const emptyList: models.Slideshow = { slides: [] };
    await testClient.xml.putEmptyList(emptyList);
    });

    it('should correctly deserialize empty wrapped XML lists', async function () {
      const wrappedLists = await testClient.xml.getEmptyWrappedLists();
      should.exist(wrappedLists);

      should.exist(wrappedLists.goodApples);
      wrappedLists.goodApples.length.should.equal(0);

      should.exist(wrappedLists.badApples);
      wrappedLists.badApples.length.should.equal(0);
    });

    it('should correctly serialize empty wrapped XML lists', async function () {
      const wrappedLists: models.AppleBarrel = {
        goodApples: [],
        badApples: []
      };
      await testClient.xml.putEmptyWrappedLists(wrappedLists);
    });

    it('should correctly deserialize a root XML list', async function () {
      const rootList = await testClient.xml.getRootList();

      should.exist(rootList);
      rootList.length.should.equal(2);

      rootList[0].name.should.equal('Cavendish');
      rootList[0].flavor.should.equal('Sweet');
      rootList[0].expiration.valueOf().should.equal(new Date('2018-02-28T00:40:00Z').valueOf());

      rootList[1].name.should.equal('Plantain');
      rootList[1].flavor.should.equal('Savory');
      rootList[1].expiration.valueOf().should.equal(new Date('2018-02-28T00:40:00Z').valueOf());
    });

    it('should correctly serialize a root XML list', async function () {
      const rootList: models.Banana[] = [
        {
          name: 'Cavendish',
          flavor: 'Sweet',
          expiration: new Date('2018-02-28T00:40:00Z')
        },
        {
          name: 'Plantain',
          flavor: 'Savory',
          expiration: new Date('2018-02-28T00:40:00Z')
        }
      ];

      await testClient.xml.putRootList(rootList);
    });

    it('should correctly deserialize a root XML list of one element', async function () {
      const rootList = await testClient.xml.getRootListSingleItem();

      should.exist(rootList);
      rootList.length.should.equal(1);

      rootList[0].name.should.equal('Cavendish');
      rootList[0].flavor.should.equal('Sweet');

      rootList[0].expiration.valueOf().should.equal(new Date('2018-02-28T00:40:00Z').valueOf());
    });

    it('should correctly serialize a root XML list of one element', async function () {
      const rootList: models.Banana[] = [
        {
          name: 'Cavendish',
          flavor: 'Sweet',
          expiration: new Date('2018-02-28T00:40:00Z')
        }
      ];

      await testClient.xml.putRootListSingleItem(rootList);
    });

    it('should correctly deserialize an empty root XML list', async function () {
      const rootList = await testClient.xml.getEmptyRootList();
      should.exist(rootList);
      rootList.length.should.equal(0);
    });

    it('should correctly serialize an empty root XML list', async function () {
      await testClient.xml.putEmptyRootList([]);
    });

    it('should correctly deserialize an XML document with an empty child element', async function () {
      const banana = await testClient.xml.getEmptyChildElement();
      should.exist(banana);
      banana.name.should.equal('Unknown Banana');
      banana.flavor.should.equal('');
      banana.expiration.valueOf().should.equal(new Date('2012-02-24T00:53:52.780Z').valueOf());
    });

    it('should correctly serialize an XML document with an empty child element', async function () {
      const banana: models.Banana = {
        name: 'Unknown Banana',
        flavor: '',
        expiration: new Date('2012-02-24T00:53:52.780Z')
      }
      await testClient.xml.putEmptyChildElement(banana);
    });

    it('should list containers in a storage account', async function () {
      const listContainersResponse = await testClient.xml.listContainers();
      should.exist(listContainersResponse);
      listContainersResponse.serviceEndpoint.should.equal('https://myaccount.blob.core.windows.net/');
      listContainersResponse.maxResults.should.equal(3);
      should.not.exist(listContainersResponse.marker);
      listContainersResponse.nextMarker.should.equal('video');
      should.not.exist(listContainersResponse.prefix);

      should.exist(listContainersResponse.containers);
      listContainersResponse.containers.length.should.equal(3);

      listContainersResponse.containers[0].name.should.equal('audio');
      listContainersResponse.containers[0].properties.etag.should.equal('0x8CACB9BD7C6B1B2');
      listContainersResponse.containers[0].properties.lastModified.valueOf().should.equal(new Date('Wed, 26 Oct 2016 20:39:39 GMT').valueOf());
      listContainersResponse.containers[0].properties.publicAccess.should.equal('container');

      listContainersResponse.containers[1].name.should.equal('images');
      listContainersResponse.containers[1].properties.etag.should.equal('0x8CACB9BD7C1EEEC');
      listContainersResponse.containers[1].properties.lastModified.valueOf().should.equal(new Date('Wed, 26 Oct 2016 20:39:39 GMT').valueOf());
      should.not.exist(listContainersResponse.containers[1].properties.publicAccess)

      listContainersResponse.containers[2].name.should.equal('textfiles');
      listContainersResponse.containers[2].properties.etag.should.equal('0x8CACB9BD7BACAC3');
      listContainersResponse.containers[2].properties.lastModified.valueOf().should.equal(new Date('Wed, 26 Oct 2016 20:39:39 GMT').valueOf());
      should.not.exist(listContainersResponse.containers[2].properties.publicAccess)
    });

    it('should get service properties in a storage account', async function () {
      const serviceProperties = await testClient.xml.getServiceProperties();
      should.exist(serviceProperties);

      serviceProperties.logging.version.should.equal('1.0');
      serviceProperties.logging.deleteProperty.should.equal(true);
      serviceProperties.logging.read.should.equal(false);
      serviceProperties.logging.write.should.equal(true);
      serviceProperties.logging.retentionPolicy.enabled.should.equal(true);
      serviceProperties.logging.retentionPolicy.days.should.equal(7);

      serviceProperties.hourMetrics.version.should.equal('1.0');
      serviceProperties.hourMetrics.enabled.should.equal(true);
      serviceProperties.hourMetrics.includeAPIs.should.equal(false);
      serviceProperties.hourMetrics.retentionPolicy.enabled.should.equal(true);
      serviceProperties.hourMetrics.retentionPolicy.days.should.equal(7);


      serviceProperties.minuteMetrics.version.should.equal('1.0');
      serviceProperties.minuteMetrics.enabled.should.equal(true);
      serviceProperties.minuteMetrics.includeAPIs.should.equal(true);
      serviceProperties.minuteMetrics.retentionPolicy.enabled.should.equal(true);
      serviceProperties.minuteMetrics.retentionPolicy.days.should.equal(7);
    });
  });
});
