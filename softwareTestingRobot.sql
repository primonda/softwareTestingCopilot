PGDMP  "                    |            SoftwareTestingRobot    16.2 (Postgres.app)    16.0 :    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16925    SoftwareTestingRobot    DATABASE     �   CREATE DATABASE "SoftwareTestingRobot" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
 &   DROP DATABASE "SoftwareTestingRobot";
                pritamkumarmondal    false                        3079    17182 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    17193    features_id_seq    SEQUENCE     x   CREATE SEQUENCE public.features_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.features_id_seq;
       public          pritamkumarmondal    false            �            1259    17010    features    TABLE       CREATE TABLE public.features (
    id integer DEFAULT nextval('public.features_id_seq'::regclass) NOT NULL,
    product_id integer,
    title character varying,
    description character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.features;
       public         heap    pritamkumarmondal    false    225            �            1259    17180 	   my_id_seq    SEQUENCE     r   CREATE SEQUENCE public.my_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.my_id_seq;
       public          pritamkumarmondal    false            �            1259    17003    products    TABLE       CREATE TABLE public.products (
    id integer DEFAULT nextval('public.my_id_seq'::regclass) NOT NULL,
    tenant_id integer,
    title character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    description character varying(3000)
);
    DROP TABLE public.products;
       public         heap    pritamkumarmondal    false    224            �            1259    17087    tenants    TABLE        CREATE TABLE public.tenants (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.tenants;
       public         heap    pritamkumarmondal    false            �            1259    17086    tenants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tenants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.tenants_id_seq;
       public          pritamkumarmondal    false    223            �           0    0    tenants_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.tenants_id_seq OWNED BY public.tenants.id;
          public          pritamkumarmondal    false    222            �            1259    17202    test_cases_id_seq    SEQUENCE     z   CREATE SEQUENCE public.test_cases_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.test_cases_id_seq;
       public          pritamkumarmondal    false            �            1259    17205    test_runs_seq    SEQUENCE     v   CREATE SEQUENCE public.test_runs_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.test_runs_seq;
       public          pritamkumarmondal    false            �            1259    17031 	   test_runs    TABLE     �   CREATE TABLE public.test_runs (
    id integer DEFAULT nextval('public.test_runs_seq'::regclass) NOT NULL,
    test_case_id integer,
    status boolean,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.test_runs;
       public         heap    pritamkumarmondal    false    229            �            1259    17024    tests    TABLE     B  CREATE TABLE public.tests (
    id integer DEFAULT nextval('public.test_cases_id_seq'::regclass) NOT NULL,
    title character varying,
    description character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    pid integer,
    fid integer,
    git_action_link character varying(3000)
);
    DROP TABLE public.tests;
       public         heap    pritamkumarmondal    false    228            �            1259    17219    tests_scenarios    TABLE       CREATE TABLE public.tests_scenarios (
    id integer NOT NULL,
    fid integer,
    scenario text,
    pre_requisite text,
    test_steps text[],
    expected_output text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    pid integer,
    git_action_link text
);
 #   DROP TABLE public.tests_scenarios;
       public         heap    pritamkumarmondal    false            �            1259    17218    tests_scenarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tests_scenarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.tests_scenarios_id_seq;
       public          pritamkumarmondal    false    231            �           0    0    tests_scenarios_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.tests_scenarios_id_seq OWNED BY public.tests_scenarios.id;
          public          pritamkumarmondal    false    230            �            1259    17199    user_stories_id_seq    SEQUENCE     |   CREATE SEQUENCE public.user_stories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.user_stories_id_seq;
       public          pritamkumarmondal    false            �            1259    17017    user_stories    TABLE       CREATE TABLE public.user_stories (
    id integer DEFAULT nextval('public.user_stories_id_seq'::regclass) NOT NULL,
    feature_id integer,
    title character varying,
    description character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.user_stories;
       public         heap    pritamkumarmondal    false    227            �            1259    17196    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          pritamkumarmondal    false            �            1259    16996    users    TABLE       CREATE TABLE public.users (
    id integer DEFAULT nextval('public.users_id_seq'::regclass) NOT NULL,
    product_id integer,
    username character varying,
    role character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap    pritamkumarmondal    false    226            �           2604    17090 
   tenants id    DEFAULT     h   ALTER TABLE ONLY public.tenants ALTER COLUMN id SET DEFAULT nextval('public.tenants_id_seq'::regclass);
 9   ALTER TABLE public.tenants ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    222    223    223            �           2604    17222    tests_scenarios id    DEFAULT     x   ALTER TABLE ONLY public.tests_scenarios ALTER COLUMN id SET DEFAULT nextval('public.tests_scenarios_id_seq'::regclass);
 A   ALTER TABLE public.tests_scenarios ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    231    230    231            p          0    17010    features 
   TABLE DATA           R   COPY public.features (id, product_id, title, description, created_at) FROM stdin;
    public          pritamkumarmondal    false    218   �E       o          0    17003    products 
   TABLE DATA           Q   COPY public.products (id, tenant_id, title, created_at, description) FROM stdin;
    public          pritamkumarmondal    false    217   J       u          0    17087    tenants 
   TABLE DATA           1   COPY public.tenants (id, created_at) FROM stdin;
    public          pritamkumarmondal    false    223   �U       s          0    17031 	   test_runs 
   TABLE DATA           I   COPY public.test_runs (id, test_case_id, status, created_at) FROM stdin;
    public          pritamkumarmondal    false    221   V       r          0    17024    tests 
   TABLE DATA           ^   COPY public.tests (id, title, description, created_at, pid, fid, git_action_link) FROM stdin;
    public          pritamkumarmondal    false    220   (V       }          0    17219    tests_scenarios 
   TABLE DATA           �   COPY public.tests_scenarios (id, fid, scenario, pre_requisite, test_steps, expected_output, created_at, pid, git_action_link) FROM stdin;
    public          pritamkumarmondal    false    231   zX       q          0    17017    user_stories 
   TABLE DATA           V   COPY public.user_stories (id, feature_id, title, description, created_at) FROM stdin;
    public          pritamkumarmondal    false    219   Wx       n          0    16996    users 
   TABLE DATA           K   COPY public.users (id, product_id, username, role, created_at) FROM stdin;
    public          pritamkumarmondal    false    216   �x       �           0    0    features_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.features_id_seq', 19, true);
          public          pritamkumarmondal    false    225            �           0    0 	   my_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.my_id_seq', 53, true);
          public          pritamkumarmondal    false    224            �           0    0    tenants_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.tenants_id_seq', 1, false);
          public          pritamkumarmondal    false    222            �           0    0    test_cases_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.test_cases_id_seq', 7, true);
          public          pritamkumarmondal    false    228            �           0    0    test_runs_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.test_runs_seq', 1, false);
          public          pritamkumarmondal    false    229            �           0    0    tests_scenarios_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.tests_scenarios_id_seq', 78, true);
          public          pritamkumarmondal    false    230            �           0    0    user_stories_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.user_stories_id_seq', 2, true);
          public          pritamkumarmondal    false    227            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          pritamkumarmondal    false    226            �           2606    17016    features features_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.features DROP CONSTRAINT features_pkey;
       public            pritamkumarmondal    false    218            �           2606    17009    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            pritamkumarmondal    false    217            �           2606    17093    tenants tenants_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tenants DROP CONSTRAINT tenants_pkey;
       public            pritamkumarmondal    false    223            �           2606    17030    tests test_cases_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.tests
    ADD CONSTRAINT test_cases_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.tests DROP CONSTRAINT test_cases_pkey;
       public            pritamkumarmondal    false    220            �           2606    17035    test_runs test_runs_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.test_runs
    ADD CONSTRAINT test_runs_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.test_runs DROP CONSTRAINT test_runs_pkey;
       public            pritamkumarmondal    false    221            �           2606    17227 $   tests_scenarios tests_scenarios_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.tests_scenarios
    ADD CONSTRAINT tests_scenarios_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.tests_scenarios DROP CONSTRAINT tests_scenarios_pkey;
       public            pritamkumarmondal    false    231            �           2606    17023    user_stories user_stories_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.user_stories
    ADD CONSTRAINT user_stories_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.user_stories DROP CONSTRAINT user_stories_pkey;
       public            pritamkumarmondal    false    219            �           2606    17002    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            pritamkumarmondal    false    216            �           2606    17056 !   features features_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);
 K   ALTER TABLE ONLY public.features DROP CONSTRAINT features_product_id_fkey;
       public          pritamkumarmondal    false    217    218    3530            �           2606    17213    tests test_cases_fid_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.tests
    ADD CONSTRAINT test_cases_fid_fkey FOREIGN KEY (fid) REFERENCES public.features(id);
 C   ALTER TABLE ONLY public.tests DROP CONSTRAINT test_cases_fid_fkey;
       public          pritamkumarmondal    false    220    3532    218            �           2606    17208    tests test_cases_pid_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.tests
    ADD CONSTRAINT test_cases_pid_fkey FOREIGN KEY (pid) REFERENCES public.products(id);
 C   ALTER TABLE ONLY public.tests DROP CONSTRAINT test_cases_pid_fkey;
       public          pritamkumarmondal    false    3530    220    217            �           2606    17071 %   test_runs test_runs_test_case_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.test_runs
    ADD CONSTRAINT test_runs_test_case_id_fkey FOREIGN KEY (test_case_id) REFERENCES public.tests(id);
 O   ALTER TABLE ONLY public.test_runs DROP CONSTRAINT test_runs_test_case_id_fkey;
       public          pritamkumarmondal    false    220    3536    221            �           2606    17228 (   tests_scenarios tests_scenarios_fid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tests_scenarios
    ADD CONSTRAINT tests_scenarios_fid_fkey FOREIGN KEY (fid) REFERENCES public.features(id);
 R   ALTER TABLE ONLY public.tests_scenarios DROP CONSTRAINT tests_scenarios_fid_fkey;
       public          pritamkumarmondal    false    218    231    3532            �           2606    17233 (   tests_scenarios tests_scenarios_pid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tests_scenarios
    ADD CONSTRAINT tests_scenarios_pid_fkey FOREIGN KEY (pid) REFERENCES public.products(id);
 R   ALTER TABLE ONLY public.tests_scenarios DROP CONSTRAINT tests_scenarios_pid_fkey;
       public          pritamkumarmondal    false    217    231    3530            �           2606    17061 )   user_stories user_stories_feature_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_stories
    ADD CONSTRAINT user_stories_feature_id_fkey FOREIGN KEY (feature_id) REFERENCES public.features(id);
 S   ALTER TABLE ONLY public.user_stories DROP CONSTRAINT user_stories_feature_id_fkey;
       public          pritamkumarmondal    false    218    219    3532            �           2606    17081    users users_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT users_product_id_fkey;
       public          pritamkumarmondal    false    3530    216    217            p   d  x��TKr�6]���X,$��,R�Tq�9q씫��4�Cd1+$��O�eY��u*�A5A���{�-Xμ�^K�3Z�^K�g"�EV^�x�f�eZE͋$g� {�NJ�e���)��l��I�Jv�U҇�Ω�)0���5��ܙ��Ψ`�;uN�tgΝjB�����P"�8[z��˓�B��N�x���MD��^�3�h�2m�U�#��*M���{�`��&�c����k�V�c��PM{]E�{�y�EZ�yRq���;أ����]���VC(�����r��Ӭ��n�Ԭ��k�4��=;:i�����-�"ߕIQ�[��&Z����`�T���Ң�e�'<cy��=\�\�%{s��ސ������@�ܼ��0�#y\X��[f2q^���O!�E�o���r�fy�E�k��sV�f���g�3D�`���h<�'Od�_M��4�xV7	��ٗ�����V��G��t��]Hw�[�z��mQ��N9�(���x����%��֬&H�h��%6��6}�[�h;v���U�Y=�yI�e�r�V�.�7/XQ2��5�CpA�uR� ������넗�a��7"|ta�w�('��T��Ҳˑ�F��C0��Ƣ�� '�xh�WX�x3�ɿ���'|�D�7#j�s��魽���d?�h�df9����; ��!��<~Ž;�1�!��D�4	�Or�� ~�G<�^�H���0��@�ƕ��W����xB��/��.D4�:@]V4�N���ף�t\�z�BZG���=����
�u�羄 Gm��]]�M���̛�U�3�j��־<uf2.�^������`"��d��"{���(ش���e�r�W�xO�P�8v��c!��)$�|��T���'��i��v����0��Q:fb#�w���z�jBX��$�����%AG�nCI��("��J�Gg-|���DI�b�/�b��w��ϟ�~"�ߵ�jE�f�&/^�R�KgmtOj�EG���Id��K�H$����.zx��g���_�������٦XC�$DC�߰2g���;G�D���;��}���5���#�pFCU��i�֠��0�����?F�/2�j�'�F
�]��6M���?�]      o   �  x��Z�r�F>O1{HU��P��� o��l\qb�'�*_�!1$�� !���G��>�>�~= %J+'����"�t�t�;�E�xc�qmjm�x|$Wa��pū ���G��M-ڽV��f�E����������	)U�z1*6��k�%S�J�Q�������nXaݪa`�-٨d՚�l�Â-.��F��_�X�5��`l/�p�XJU�Ꝩ^��X��n*����rՠ�����vM�zhԁM��u��^�F���6�z�jm�F���"��ֈ��C� �C��e���p���lt4V�A��UrT%�O�h�-F�# �P_�t{=XQ�_�8�йuP�B���,MM:����J�� *�:���0��*1=�^{�S�#S�`q?Mg�����(Xř��������8�,�hL���&�(_%���q$�������*�(��|�ј�m]U
WA�GQ�FO��x2V���<]��1��5�;B/�~��s?��<��1���7[�ˀ�T���+�����$�N�I2|Rw�9����]LJ�I͏;\����ӕ��>|�E��!	S��:.<T^���~Q��<	���y�>��J��񐐯tN��<?';�+^�!���7Z�OdOrg���q�b?�������=N�d�h��ctQ+Ħ�D	a�d���g��2o�g��x�<Q���'�S��g�JVa�#7B���q�,V�K�rqL���X#?K�<[k�<���T�O���bb(K�e� k�,V���5�k/L3�u9�0\��*O8�&�����ra��#*[y�e�2�g���ܹ�a�Ŏmw��d�eS)�VZn�I㻮����KS-���!a)i�׺��|��X��<�T�s��d=1�������fʹ��T��G�5_c	͋uγh���<*$�
�;K�#�mW��D�&���9[wu�D��"�.��o�%I���㔂�m��pH"W�� N@ ��xe��CL�����y�a����!�������8M���5OP'T��$I�t1��ǋ��f�D#~yдf�3��I�Y��rڳ��6vb/^�c�~���w/{��k���u}��	^D�$���>K�"����Kr��E��#��M��a�c����Ѯ�dZ=ɵQ���P�sVT���2�#j;���Ƕ�^^n+���ʭ���[���[�A9�kþ��x��`ICO������W�W�݀�k�mt��e�j��	d��g�=��0�4F�[0s��C���n�.ui[���բ�x��Y4�7���\�X�w#S�n �az=.Es�n�Xk0�ؒ�z�G7C1[ע�f�LDzд��;3%�x��l �}���
No��l�nY��^U�-1|�tcojۍ�"�d)�lFI\�'�`�ek���ZR�u�ǅ�}��Tݨ,���BI�l��v�V���R��"!�E��;Av3�^k��A���15�! Kj��z����?�����p��}^D�v�JS�W���jl��i��/v�$�V�^L�������ܹL�A�1�L6��Xϋ��n��js{�� ���(��$���w�\��V��{-%���r��@S�2���
���q�h^L]�RA?��a��ъ3��9z5�J7�|@�b/�����A����{�}q���F�ދ�s�L�?oL	�]'�w�Ƌ�޶Eid!ضF[���K;�?�{���� �:pL[�.��+��b�3	�٢����z1����(}s$O���u�di��$�Z��7��xy�o!�r�"'f0Ω���σ4 �ؤ�F+��ʝSk~�����i=��Y�/���m}��� �/�?��x�?�`d��.h(�{5����l=�1����R�f���{T���;�F��j��u��f�v<�w7!�Qb��,y���$c4�@�l��L�A�� �f#��K�ؒ9��lɟ����R���0��I�2�=���A�k��sL��}��}��Nۋ�e�]���`��5���u���
��괤�C���b����t>F�e�V�)Z�L��4����X�V�
bT}3�]K'���Q�ƢTC�n�Z5���l.�}�K�Sjw0w��n�Ual[��5:%5�q��g����4m?\��S��^��'�Μz۷�3g�-F�lG,�ʓV��X��=@8�N�B���:��C"�2�#Sq@P�l�D�P���<1�����G�h�;H��k�k�7l��S=�p8�#�du����/o9�quR��^6S hZ�����o��F�ݎy��I��/)d&�I���F*:��Ԍ	>q��c���z���' ���h�q�s�h�������Ѵ�@tr"A�1߁�Mo��e�K�a>�����a�`��UzC��As�D�W��wȽE7��/����0�h7W�w��!
�~����DŐ�zrp�^��!���N��g'"��i<�숊��s�F�A�^��7�\�z��߳�Q�͹.�*)�4қ��7T{\���҃�@��WB�ݱ�.]�ƌ�� �4ͰG���ظ��};L5�\��w��&���|���O��ˣ��*�w�h��Di�f�e�������r��C�T0��l9�{D��A��I�\5ܝ���(K@�3m�'_h��	b7�A!cHd�+E�F��ޛ����+�:{�||M��i�!�@?{}hN�]Ⱥ�*E	*�p|��<8:�+���o~��6A���t���ظ��ϭ�G��9��^����"��/�XMǢ��4`	����X���T�/�"�u�������A����;�¤VUSuq�:J��Y�6�6Po1�*�s�
өS+�~E�O�:c�\��ܣ2"�zCՌ��5��a�*ΨK�����T�FX������䈻u�s�|y�Ȏ㫝�&�x�9(pM���{�ygw�6����L������P����=����<�      u      x������ � �      s      x������ � �      r   B  x��Kr�0���)p�D��#k�f�m�M6$9�%R�K���I��:��� ��i�ʓ�4�Rn]QTE�<�c�BY�M��u޴�n_�J�bu��#&~TV	�mG�cP�̋:��=�-���Y]WUW���ór����$>��m��y�����3\�{2k�8ZX�1���=c�We^�e��KY+����t�Lz��f?��h�q��Nց� r�� ��:`��@yM� 8= H��v�����d44D ��b<`��fy0�D�(s� �̆��M⣜�Ƀ�>�8 ���d k N�����7'�e�"iag@Ʌ�\��5��B�7���\�Jn�����74:n�_$;Ņ�!�Ýz��i�>�"��@2��
�E:>D����%`�dd��5��� ��],�ҀfSqS���8-r��8�&	zt�u��V��"������������|�e_V}��v�v�_������K��*Ne�J_-����|Gi�}����)�;�4���$=i�S�ʪ�9J�x3dO���"N�7EI�r�W��(�橩��hZQ6"^t�A_t�^�,�~.��X      }      x��][��F�~��
���m@�J���ֱ��'���Nf�@^(���c�ԐT۝E���K]�*Jj�3�DV�:�s���"�xU��Q�����*�*z���ض���>��|��ˋ,����H��<q���/�������Gi�������F�^��cT���u�E�hP��%>�A���-���}���>�>�Q�7-�������.-oE3~���/�a�&��f_�"��F��<Q�rO�����e��&��du5]���x1]_����b���� ��}Z������o�>c��A��}>c}�����Т�]����x'��8��>c��Ay�D?���hEۘ���� ��rf�=�\W��!^�5P��ą,��hS�\r��y�>��w��t�ܝ���*��s�D�IC�Su&{�=5{���w�}��{i�{Q�7Q�}
6�c����c��Ӥ���jYEE���;�>�m6W�ta�mhW����ŷ�#'I��6 ��͋"�A	7����9�h,�O�1�ti�������l-��#0�o)�q�w���#c�����<e�� ��.C� �qe����WUY���̰�ȿ�*�dY�0M^�.7�#3��e�CA�{�(�6���.�G�Þh��{Z�09Nʢ����0�FsH�c�y������,��/��d��M��%>,��ć2 q[�����8Ξ:3�q���DϹz*P��"���0|�����l2�1Nր��9S��c��ۺj��v�D7��7��m�oش�kq�W�&j��Lk�Q*��%oo���"�N�;����>�k�#���>�J�բ�+��#5J�A��$:����N��O�G�W�F���	� ����c�hӼh��b|;�Y�Ⱦ����P��#���Q9,^fL�����kq#���'kKS��D	z�8JgZ:L߈�-G��m`��|̐"1n��%ϒ�r!��4��|�u���}]���h�,
�;{ ����Ə�̐��eg,��O�(�t<����=-�3�iS��4��V4�͡(�4�B~U�/#�?~y��:��wn�c[�5<Z<t�1__%�q/&3ZO���	}el�.ip�� /:���⤴�I���B��T��bP̒�j.A�	�h^}�ۍsC�ԅ	'����Q�چ��Ҙ2���6oUuϦ��l������4EÏ�4�P�菋��A�jn�,������������yy��_�͡Ư�k q7�D��d�ZM%N�G,��B�e��o��ˑ�e���U�0��ךI���0��@��8��P��3D ́r��HY�(�V�C8E�W�e��^SӉ��G��aJ"�Jb�(���(dQ#�۴�d��ϰ;�}p��@�`��ݴ��'��T��ļ��Q�<Ǻ)M���oԤ%>�Ѩd�"�K�aĕ�Ѝh?	Qz�V��
I��b���B�5{��mZ��3���G�f�	v m� M"mr�8�4BF����2&N�@�_� Y͖!���1/Z?F�h�]�o{��?9H~��!b�՞�X`��,��
���N#��|���O>z]��hR<�>-O�&m���NF��F��أ�c����a������_<֊�-��8<�TD�t���$����Q^�$���/u��{���f�R�2�ݏ>��<Dl{ ۸�2��"�t�_���Vz
���P�4���+`����7�pjU�
I(�8H&�$��.����|:�.�!Z���x����0��&�x{�-�<��8d�	��F�,�*�O�K�q���K4溬%�\�G�â�t�`�o�BpS¶��y�P�lٟޟ\��0�&$���ݚ����N]���`閾;�Y-d�F<�F�?��f`�CP�2���ߧC�#`_ �z1h �}�nq���Ymթ��cO8#iH��Y,��8��ߐh��f��09�i�mN�$��c������ �����`�d�8V�:��FA��f��'&�@�����b��G�N1P��K�G-G���c�Nz�}�_kv4���׵�ȯq�"�Ȏ�Qf�U���Dy���j|d�²�@�/+p�1z���+p�At����3��r�{L<y����A��7�5�6��,M��{S�v�$�orQd#vjU�l�e/3	��~�@�^Ny
+Bլ���4B���f��d����+6�|["����F% ݶ����5�}m� }��H&Ya���5dC��P�x�^�<v�s�rT7�F^h�N\���
��B���.tΔ��u��/���O�0=�ߪb��A��Qhk9��A�����ᰤ#�t�*^,Y������!3De��W�r���V!�m�qTYO3|e�u��%�[7�8�}�H���Nӈݓ���;��G�k�n��4u���am�˾Y���t�M�@��);��ע�����\u,�*I�7�d*������r�R�Ӻ߻>�AIt����J-�������8�	������B�(<Ν^ūD��%�����������9�Y���}M�f<���y��+�n �tE�<�^g��`(��6���Ce����O.��� ����A)?��x��qEцk�&3<���L�ku|n��b0T ������☭
�N�������@xǠv���ꍏ����wB��1 �p6��j�9[�p�ē����/�F�HOu�Km@s�cx���x���Lw��?V���ޏ�7.�N�ɸz�R�	��42]zV��ݏ��*Y�nBș�T4Il��� z�IO����̣|K��q�m;M��Nr��\uZ2s0�u�r�&c ¨M���.��w�9B��'S�yH0��z�S�f�<���:�-əj��n��T�b;�ZSq����@ϐ��<=��c9���ӻ%np�M�7wV���^F�8�٣���v0a[�:�H7y��2�X�j�|v�ö�80�a��L�T����B2�EW=��>Pp�k�����l��Tܱ���B��˜������X�
0�Ht�t;�:�p(s���~����S7�3�c{��\�鞕3���ծ�:��1XW ��t��%�{����x�Yш���erX�9#wE=�����j����da$��ˌ��X�D�t��ͻ��n<W��F��qx�X0 ��Q<$�f{�U=q TG`�ȟ�T ��^5"X��Qr
ޓe1�[Fh@�Ј�ȑ�Ą�S'`b=�e'V�4� uQj��EQm���&�]�;}p(�aL�LB?*[qon��$}ܖĒWc����6��՚�*���m����cQ��H����R/w��B�ׁ�T?��fsT
n�{�,�,�LG�W��?�@�]��_�#^O��X�����4���{&8�.$�"J�d��P��6l�َR��&����.>ܡ��-�Zd����1�����o�����(�[I��*>N@wp��[���C�J#���jHXI����s�Z3v�r�n�Z	 ��VvG�!s������?����㡇�]	xL@"a�C���,�+�� �TD����;wߨ�-DK��*0�k^�Ku�;f�_���{�GM:�U
 ���qAͼR���3Ϝh�-���C���+>b�*xD��!Q��`gz�X�eӍ^�x��>u����MQ}
ad�,��O�3�J:�g�R�#i��(��M���`vO���#V'�`�Y/Ug��c�E��0Y�t�E��C7�Y��.�0d����}O��k������ZM��i[�5(�B�+���*N� I����'�d0pmM${1�.>(1Jy� 9+�H/�>�s�x�s���Z>hɩ��N\'�d7P+��綫�Aw#K���!�9�EbW�{�TH�?�W��D��YlXͮ�;yL�_�1�[�L��FF>9��zO^�Rͬ[�{�p��{�ҍpK"�+���&�Y�������3�z�^|ퟢ�=��#��+N@@0s��ߎx�<G9�h,iX�G.ֶ�j���;-�0��)WF�<#�G�B	��"�Z��@cr�gC���v��T'�okg����&��e����j�� �  �dQ��]v�w�6���Y���t"3�r!/�K��͌���}m�~��������|�����������4ۻw?��Ι���(s��uX�v{��#t��ui_WZ-0�����@��(���AC>d`ΐ����V&L�]ѵ��c��vg#�"7���ǅ5y��j�N+A� ��i��S'<10���(�^�o��#e]v�U
�5�(��:���&L�u����r69��3;չq�x�v�Ly2!ZMx&@YP�����'��xg��g�v[�g��A[A8��ݦJ���){�>���G��<��z8���?�{Ӽ���.,T���qU�Oٲ�;\�]��c?���
��Sߑl�B�6�u[��+;z�A(��zY^L�w�l��J�]�WQ�, zD�� w9�V�����H�C�[uK���k;�ES")�\eh��R��9���S��o��V��☓ܽ��>oia�f_�p>�D���4��W�8��&�5�~��a��"�Q�7�"��:�B4��ܕ�<<�r��'�F��C�E�_�4�-G}������=�`Q��dsqW}r�g�@� ���id9�50��ߕ�[Lkݣх�*�h�a�F��.�U3J���=���h]��Vc�\���ܻea��e.H�ltv!uDj�/�(����ɺ։��/���M��x�L����#���c�.vh�����x$��vo�FWyH��z�b��'��@��rE�(��d��^�u��ɍ��8K��{2ކi��&�i솋RG����䜑��fz�G��h	̎�q6\��J�;��f^��3�u�,v���&x}�ߦ�����2Q���4���V�OQ��q�j;�+Ք�u(�*�w9<�Vi�lӎ�2b	[��[��'YͥL;F���V�P�(@�~���B�$ΫQ��̯�R?�)�Qv$p��e2ɃF�ؖ�e�a1�����ǯ��vi#^I�h�']�����T+�_tJ�81vP ��%ǅ�t�a#l��-�cK����|�$�e��9�B�c�p,k�3 �lM���}����O�/��ۨ���D�����Z�)�}O6��=r"�\�I�P���Ĥ'bQ�� ���%��4�)nR��U"� �*�xe]���At`�{�i:!�U�æZ����]��6
��zwb�Q����h&���4G{5�2+d5^����OrF�v2L�9�ǹ%Z6�4�*6$��:A:��|�C(����	l��sE�kpw6�?O�_8�3\�ޒ3�k��E�f:m&[���T������s%+C�� �@eNφ"
�1��5���x����\����s2�y�B����5��ؗe�/f��B����	a����̣Ӿ�tۻZ8D�熲i	7�K���I�ҋ�*�t�����KDM�RF��ES�dUmq:�yk|�}�~G\���b���@8%��u��l�{50��#�LWA�d�d-� �.~-7E��ș DCᚏ��W���{y�"~y[��,�$� R~��=U�Q��t�5��f�J]}�u���J=N|	�@uE����jW��Kҟc���z��ٹ��;��&�nyQ<�b��e<G&��$��d2���O,-�=h��[ڣf��o8hw���1��k�w`'w���>�|��s�D�,����3maXЙ0�D��jՁ�z�ᲂ0��"O�F��Z��`+��U[H{��. �����:ef��^�y����y��8�r�
[3�f�y�=�o��:�,�*�����c��yy,�3��!JN|��&�y�u��_Vm�G�܉��z�x�jp��
�(�
\M��|Ӛ���Bn�	�R�5.qC�!����ګ{�۾��N����q^Pl�"�}�v&T���qXΟ�*-N(�q��O�H�� ��y��ʂ�,�� �BM��N��eZ�I g����w?ß:���Uk��\Gׄ�݈�rh�c6R�[��D�٦�6f �q!B�Gt�Q��w�f���9s����t[���/
��$�dO�@��_�Cy�����L�E|��[�L��
��0��:8o����_p"�Z'h3��9����}c\ر�FA��	��ӛ�aC��j׷y�� Lg��l:�M/�S���	2վ�N���E?���Y2�>�]'���t��nj���Z_<�\Gy@�.�S��K��w�1`9Su	H�u���v/ ]��)����|K̶j(۪8���N��a�t#T
�y��S����^�'���TS�l��
tH3>eH5���J\��r�J:��0�^u�0��-������KS�X��|jbs�w��Ux6z�^w�'(ވ`�>��e��EY�=���pb���A�X%6��Z��ؒ
!-P��ۮ�Wӹ�p������~/J�J��%	\T���Ø	��P5����ـ+�����P��8E�U�
�j�,ݷ�ݰFS���@����4��^rĉ��q0#��;����s���i5[(9�. �יni7�e��l�Kz���׷���O��{;rF�*���goJ|����j� ����� M'���ݏ�V)"�Dc�#�p��t�'7;ԩ�g��N��a�n_Y!n	
��@���M�=��e/-IL���*^^%�q��a�}>!I�mIط��D%y���q��K�oB����9�H�����c�u��F��iG�\E��
��r)?�s=����av��2�,����G��?�?�?�:2h�T����`�P�yΙ�#}�����:'#3��ͅ[ma
�M�tLL�}�]:<�]vPb��ZIluDbx3Ɨj�QD��v��s�y+Df�7?d�/�.o_����%����|=���>��g��k̭0��~��{�9��6�Wf�)��1݊MU}$��P��9�g��%� !_�W�lzÍ��<��l������V����:�svb�kf��¾��a�뭅����w~�qh���ۉ~��R&�$�_�?���'��R����+���j���U���t���AҞXBRI���P��G�B�Ŕ�-�en�t�J_b��ޠ�c�V}ؼߤK���^������,ĸ�j�d��øk����'�yd����Ȋ@���}���0��eU���r��r�k�d��#׾���:�÷3���~qL#�K�j�z����Tr�Y{��-�v�PS���_�q3Ҝ21�v�<Ј5F<	�$^h��n�K?��Ǩғ��A���#O�o9b�o^�n��[�7 {:5�`A�"�Z.� �X�z<����(>L���?��=�_���0�~�v+Ǣ��K�M���|T�~n��Fz������ض�gz��"�2BN��#���aC{Pn�$�-vH���Ey�����Q��:�����m��\�P�X^.!����7��� ����q'Bd�����%���RP�r1��M��j�&sB�κc�F�Ld��r������㍊}��b����������p�`U���
�	���IL7Ю�79֋�z�#!0.0���%��QQ�"���T�r/��O���!o�?���U��Ͷ�4� Zk��i5)!�Y��V�����Ώ픧E�[6b�Wo^�*<�cE�;��������r�msg�M����g�k(��wo(m�[0�2�P�e��u�K�g�xܾY��o\��ĂdN`Sa�O���GG���v�UW��K;�cxd3��H��*�����@��KI��e�V��(r
������N�K�ÖC;�UI��YWe>�����瘡���J���n�C��3�zolh
�m�2��C�E�z�\�� ��ޮ��f=��ܮ�����A���B�>�|�̃l�,���]�%�;=t+/�He��kL��H��C�6���<��氧��}R�J�ꢉ���>�|C?t%�oc_��zw���q��3�̵N��Z�@��Q#<�'bC�J���`q��9�P<����~���}#�zN��e7_�>��>�O��t�_�]9!��'�T"���w�}���j��      q   @   x�3�4�,NLI"�Ⲕ��2.�4202�50�52V0��20�22�3��0�0����� y�      n   8   x�3�4�,L-O)B�B F�FF&���F�
��V�V�Fz�f��\1z\\\ ���     